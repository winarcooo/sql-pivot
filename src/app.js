var pgp = require('pg-promise')()
const express = require('express')

const app = express()
const port = 3000

app.set('views', './views');
app.set('view engine', 'ejs');

var db = pgp('postgres://postgres:postgres@postgres:5432/demo')


app.get('/', (req, res) => {
  db.any("select * from invoices")
  .then(function (data) {
    var result = data.map(item => item)
    res.render('index', { data: result });
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
})

app.get('/pivot', (req, res) => {
  db.any("select * from crosstab('select full_name, item, quantity from invoices order by 1,2','select distinct item from invoices order by 1') as final_result(full_name VARCHAR, barang1 INT, barang2 INT, barang3 INT);")
  .then(function (data) {
    var result = data.map(item => item)
    res.render('pivot', { data: result });
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))