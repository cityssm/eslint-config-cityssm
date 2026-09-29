"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
function insertUser(userName) {
    const database = (0, better_sqlite3_1.default)('database.db', { verbose: console.log });
    database.prepare(/* sql */ `
  insert into users (username, password) values (${userName}, 'password')
`).run();
}
