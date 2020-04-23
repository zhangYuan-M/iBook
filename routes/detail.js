var express = require('express')
var router = express.Router()
const sqlQuery = require('../common/content/mysql')

/* 判断是否登录 */
function loginCheck(req, res, next) {
  if (!req.session.username) {
    res.render('skip', {
      title: '未登录',
      content: '尚未登录，请登录查看更多资源 !',
      href: '/login',
      num: 3
    })
  } else {
    next()
  }
}
/* GET 小说文学 home page. */
router.get('/', loginCheck, async (req, res) => {
  let reqPath = req._parsedOriginalUrl.path
  reqPath = reqPath.split('/')
  const length = reqPath.length
  let book_cate_id = reqPath[length - 2]
  let book_id = reqPath[length - 1]
  /* 按照书籍的id 查找书籍 */
  let detailSql = `select * from bookDetail where book_id = ${book_id}`
  const detailInfo = await sqlQuery(detailSql)
  /* 搜索书籍分类表 */
  let searchSql = 'select * from bookCategory'
  const search_result = await sqlQuery(searchSql)
  let options = {
    navs: Array.from(search_result),
    details: detailInfo
  }

  res.render('bookDetail', options)
})

router.get('/out', (req, res) => {
  req.session.destroy(function (err) {
    if (!err) {
      console.log('退出错误')
    }
    res.send('退出OK')
  })
})

module.exports = router
