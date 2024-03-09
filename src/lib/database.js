import Sqlite from "better-sqlite3";

const db = new Sqlite("./database.db");
export default db;
