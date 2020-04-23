var express = require('express')
var router = express.Router()
const sqlQuery = require('../common/content/mysql')

router.get('/books/search/:searchId', async (req, res) => {
  console.log(req.params.searchId)
  const searchKey = req.params.searchId
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)
  let sqlStr = `select * from bookInfo where book_name like '%${searchKey}%' limit 0, 16`
  const result = await sqlQuery(sqlStr)
  let options = {
    books: Array.from(result),
    navs: Array.from(search_result)
  }
  res.render('search', options)
})
module.exports = router
