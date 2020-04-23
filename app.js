const express = require('express')
const path = require('path')
const sqlQuery = require('./common/content/mysql')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')

/* 导入路由 */
const detailRouter = require('./routes/detail')
const pageRouter = require('./routes/page')
const loginRouter = require('./routes/login')
const searchRouter = require('./routes/search')

const app = express()

/* 导入cookie和session模块 */
app.use(
  session({
    secret: '1111',
    resave: true, //强制保存session
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000 //设置session的有效期为1周
    },
    saveUninitialized: true //是否保存初始化的session
  })
)
app.use(cookieParser('secret'))

// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// 设置默认模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 设置静态目录
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

/* 首页和分类界面页面 */
app.use('/', pageRouter)
/* 分页 */
app.use('/books/:type/page/:pageid', pageRouter)
/* 登录注册页面 */
app.use('/', loginRouter)
/* 书籍详细页面 */
app.use(/\/books\/(.*)\d+\/\d+/, detailRouter)
/* 设置搜索页面 */
app.use('/', searchRouter)

/* 错误处理中间件 */
app.use((req, res) => {
  res.render('404.ejs')
})

module.exports = app
