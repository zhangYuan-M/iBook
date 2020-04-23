var express = require('express')
var router = express.Router()
const sqlQuery = require('../common/content/mysql')

/* 界面模块 */
router.get('/login', (req, res) => {
  res.render('login.ejs')
})

/* 登录模块 */
router.post('/login', async (req, res, next) => {
  // 1.查询数据库中有没有重复的用户名
  let sqlSearch = 'select password, username from users where username = ?'
  let sqlSearchParams = [req.body.username]
  const resSearch = await sqlQuery(sqlSearch, sqlSearchParams)
  console.log(resSearch[0])
  // 如果存在，提示用户
  if (resSearch[0].username !== req.body.username) {
    res.render('skip.ejs', {
      title: '用户名不存在',
      content: '用户名不存在！',
      href: '/login',
      num: 3
    })
  } else if (resSearch[0].password != req.body.pwd) {
    res.render('skip.ejs', {
      title: '密码错误',
      content: '密码错误！',
      href: '/login',
      num: 3
    })
  } else {
    req.session.username = req.body.username
    let sqlInsert = 'insert into users (username, password)values(?,?)'
    let sqlInsertParams = [req.body.username, req.body.pwd]
    await sqlQuery(sqlInsert, sqlInsertParams)
    res.render('skip.ejs', {
      title: '登录完毕',
      content: '马上跳转首页，请等待 ... ',
      href: '/books/stroy',
      num: 1
    })
  }
})

/* 注册模块 */
router.get('/signUp', (req, res) => {
  res.render('signUp.ejs')
})
/* 注册模块 */
router.post('/signUp', async (req, res) => {
  // 1.查询数据库中有没有重复的用户名
  let sqlSearch = 'select password, username from users where username = ?'
  let sqlSearchParams = [req.body.username]
  const resSearch = await sqlQuery(sqlSearch, sqlSearchParams)
  console.log(resSearch[0])
  // 如果存在，提示用户
  if (resSearch[0]) {
    res.render('skip.ejs', {
      title: '用户名存在',
      content: '用户名已存在！',
      href: '/signUp',
      num: 3
    })
  } else {
    req.session.username = req.body.username
    let sqlInsert = 'insert into users (username, password,email)values(?,?,?)'
    let sqlInsertParams = [req.body.username, req.body.pwd, req.body.email]
    await sqlQuery(sqlInsert, sqlInsertParams)
    res.render('skip.ejs', {
      title: '注册完毕',
      content: '马上跳转首页，请等待 ... ',
      href: '/books/stroy',
      num: 1
    })
  }
})

module.exports = router
