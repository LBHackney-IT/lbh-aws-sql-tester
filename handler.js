'use strict';

const sql = require('mssql')

module.exports.testSql = (_event, _context, callback) => {
  const { UH_USERNAME, UH_PASSWORD, UH_HOST, UH_DATABASE } = process.env

  if (!(UH_USERNAME && UH_PASSWORD && UH_HOST && UH_DATABASE)) {
    return callback('Environment variables are not configured correctly')
  }

  sql.connect(`mssql://${UH_USERNAME}:${UH_PASSWORD}@${UH_HOST}/${UH_DATABASE}`)
    .then(pool => sql.query`SELECT tenure FROM tenagree WHERE tag_ref = '000015/01'`)
    .then(result => success(callback, result))
    .catch(error => failure(callback, error))
}

function success (callback, result) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result)
  })
}

function failure (callback, error) {
  callback(error)
}
