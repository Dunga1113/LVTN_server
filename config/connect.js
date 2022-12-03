const { Pool } = require('pg')

POSTGRES_USER = 'fgczqkjysymotl'
POSTGRES_HOST = 'ec2-44-195-132-31.compute-1.amazonaws.com'
POSTGRES_DB = 'de5dlb217bcmad'
POSTGRES_PWD = 'da40e2826cbe7da7c72dc725153a22ee5b1f9ff6094190985ed2354d11c3cc8f'
POSTGRES_PORT = '5432'

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
