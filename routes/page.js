var express = require('express')
var router = express.Router()
const sqlQuery = require('../common/content/mysql')

router.get('/books/stroy', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/history', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/social', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/success', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/economy', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/study', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/life', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
router.get('/books/English', async (req, res) => {
  const reqPath = req._parsedOriginalUrl.path // 当前路径
  const pageId = reqPath.split('/')[4] ? reqPath.split('/')[4] : 1 // 分页码数
  const type = '/books/' + reqPath.split('/')[2] // 分类的类型
  // 每页显示4条记录
  let pageNumber = 8
  let startPage = (pageId - 1) * pageNumber

  let sqlCount = `SELECT COUNT(*)  FROM bookInfo a LEFT JOIN bookCategory b ON
  a.book_cate_id = b.category_Id WHERE b.cate_nav= '${type}'`
  // 一共几页
  let pageCurrentAll = await sqlQuery(sqlCount)
  let p = pageCurrentAll[0]['COUNT(*)']
  let currentPage = pageId

  // 页面导航
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)

  // 根据参数获取的数据页面
  let sqlStr = `select * from bookInfo where book_cate_id =
  (select category_id FROM bookCategory where cate_nav = '${type}') limit ${startPage}, ${pageNumber}`

  // 根据参数决定要分几页
  const pageCount = p / pageNumber
  const result = await sqlQuery(sqlStr)

  let options = {
    books: Array.from(result),
    navs: Array.from(search_result),
    pageCurrentAll: pageCurrentAll[0]['COUNT(*)'], // 比如 100页
    prePage: currentPage == 1 ? 1 : currentPage - 1,
    nextPage: currentPage == pageCount ? pageCount : parseInt(currentPage) + 1,
    type,
    pageCount // 比如 8页
  }
  res.render('bookIndex', options)
})
module.exports = router
