import test from "ava";
import { sqlite2leveldb } from "../src/worker";
import sqlite from "sqlite";
import { join } from "path";
import levelup from "levelup";
import leveldown from "leveldown";
import fs from "fs";

test.serial("migrate", async t => {
  await fs.promises.mkdir(join(__dirname, "..", "build"), { recursive: true });

  const leveldb = levelup(leveldown(join(__dirname, "..", "build", "leveldb")));

  const sqldb = await sqlite.open(
    join(__dirname, "..", "tests", "fixtures", "sample.db")
  );

  await sqlite2leveldb(sqldb, leveldb);

  leveldb.close();
  t.pass();
});

test.cb("list", t => {
  t.plan(1);

  const leveldb = levelup(leveldown(join(__dirname, "..", "build", "leveldb")));

  const readStream = leveldb.createReadStream({ start: "pv/0", end: "pv/Z" });

  readStream.on("data", data => {
    console.log(data.key + " = " + data.value);

    if (data.key.toString() === "pv/1030665600" && data.value == 2004.1) {
      console.log(data.key + " = " + data.value);

      t.pass();
    }
  });

  readStream.on("end", () => {
    leveldb.close();
    t.end();
  });
});
