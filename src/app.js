var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:postgres@postgres:5432/demo')

db.one('select * from users')
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })