import sqlite3 from 'better-sqlite3'

function insertUser(userName: string): void {
const database = sqlite3('database.db', { verbose: console.log })

database.prepare(/* sql */ `
  insert into users (username, password) values (${userName}, 'password')
`).run()
}
