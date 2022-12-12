const { Pool } = require('pg')

/*POSTGRES_USER = 'postgres'
POSTGRES_HOST = 'containers-us-west-102.railway.app'
POSTGRES_DB = 'railway'
POSTGRES_PWD = '0NZZASGvCsKDqIvcFkQj'
POSTGRES_PORT = '6843'
*/

POSTGRES_USER = 'postgres'
POSTGRES_HOST = 'containers-us-west-153.railway.app'
POSTGRES_DB = 'railway'
POSTGRES_PWD = 'J4K3TWUDYKvmjf4BCXfK'
POSTGRES_PORT = '8001'

const pgConfig = {
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PWD,
  port: POSTGRES_PORT,
}

const pool = new Pool(pgConfig)
/**
 *
 * @param {String} queryStr
 * @returns Object
 */

const query = async (queryStr) => {
  const client = await pool.connect()
  try {
    return await client.query(queryStr)
  } catch (error) {
    console.log('error >>> ', error)
    throw error
  } finally {
    client.release()
  }
}

module.exports.postgresql = {
  query,
}
