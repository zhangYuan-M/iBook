# Express-generator 项目 -- iBook

### 1. MAC 环境配置 express 脚手架

#### 1.1. 配置 express 框架

首先检查 安装 Node 环境，使用终端中的管理员身份安装 express

```bash
$ sudo npm install express -g  // 全局安装express
```

#### 1.2. 配置 express 脚手架

 安装完以后，如果使用的是 Express4.0 版本，这里有个需要注意的问题在 4.x 版本 express 已经把命令行工具[express-generator](https://link.jianshu.com?t=https://github.com/expressjs/generator)分离出来。
我们现在全局安装只需要安装这个命令行工具就可以，指令如下：

```bash
$ sudo npm install express-generator -g // 全局安装express-generator 脚手架
```

#### 1.3. 创建项目

上面安装完成以后，`进入到你希望将应用创建到的目录`，然后通过以下命令创建一个 Node 应用

```javascript
$ express --view=ejs 项目名称  // ejs 是模板类型，一般是 ejs
```

再根据完成的内容的提示 安装依赖等，完成创建项目

启动项目：DEBUG=sobook:\* npm start 

./bin/www 是启动文件

### 2. express 脚手架目录结构

**bin**: 启动目录 里面包含了一个启动文件 www 默认监听端口是 3000 (不用)

**node_modules**: 所有安装的依赖模块 都在这个文件夹里面

**public**: 所有的前端静态资源 html css image js

**routes**:  路由主要定义 url 和 资源 的映射关系 ( 一一对应关系 )  主要用来接收前端发送的请求 响应数据给前端

**views**: 主要放置 ejs 后端模板文件

**app.js**: 入口文件(主文件) 总路由 (其他的路由 要由它来分配)

**package.json**: 重要的是 依赖的模板列表dependencies赖列表里面的所有模板 可以通过 npm i 一次性全部安装

### 3. routes目录文件

#### 3.1. Express路由的基本使用

app 文件

```javascript
const app = express()
const indexRouter = require('./routes/index')  // 导入路由模块
app.use('/', pageRouter) // 标记前面的路径
```

index 文件

```javascript
const express = require('express')  
const route = express.Router()
route.get('/index', (req, res) => {
  // 路由的基本使用
})
module.exports = route
```

#### 3.2. 路由的字符串+正则模式

| *    | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
| ---- | ------------------------------------------------------------ |
| +    | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
| ?    | 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。 |

index路由文件

``` javascript
const express = require('express')  
const route = express.Router()
route.get('/index*123', (req, res) => {
  // 匹配 0~多
  // 匹配 /index123 ,/indexxxx123, /indexxxxxx123, /inde123
})
route.get('/index+123', (req, res) => {
  // 匹配 1~多
  // 匹配 /index123 ,/indexxxx123, /indexxxxxx123
})
route.get('/index？123', (req, res) => {
  // 匹配 0~1
  // 匹配 /index123 , /inde123
})
module.exports = route
```

#### 3.3. 路由的正则模式

``` javascript
const express = require('express')  
const route = express.Router()
route.get('/.*index$', (req, res) => {
  // 匹配 0~多
  // 匹配 /1221index ,/index, /xxxxindex 
})
module.exports = route
```

#### 3.4. 动态路由

``` java
const express = require('express')  
const route = express.Router()
route.get('/index:pid/pathname/:iid', (req, res) => {
  const pid = req.params.pid
  const iid = req.params.iid
})
module.exports = route
```

#### 3.5. Get  Post 参数获取问题

``` javascript
const bodyParser = require('body-parser')
// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
```



### 4. res的常用方法

| [res.download()](http://www.expressjs.com.cn/en/4x/api.html#res.download) |  提示要下载的文件。                                     |

| [res.end（）](http://www.expressjs.com.cn/en/4x/api.html#res.end) | 结束响应过程。                                         |

| [res.json（）](http://www.expressjs.com.cn/en/4x/api.html#res.json) | 发送JSON响应。                                         |

| [res.jsonp（）](http://www.expressjs.com.cn/en/4x/api.html#res.jsonp) | 发送带有JSONP支持的JSON响应。                          |

| [res.redirect（）](http://www.expressjs.com.cn/en/4x/api.html#res.redirect) | 重定向请求。                                           |

| [res.render（）](http://www.expressjs.com.cn/en/4x/api.html#res.render) | 渲染视图模板。                                         |

| [res.send（）](http://www.expressjs.com.cn/en/4x/api.html#res.send) | 发送各种类型的响应。                                   |

| [res.sendFile（）](http://www.expressjs.com.cn/en/4x/api.html#res.sendFile) | 将文件作为八位字节流发送。                             |

| [res.sendStatus（）](http://www.expressjs.com.cn/en/4x/api.html#res.sendStatus) | 设置响应状态代码，并将其字符串表示形式发送为响应正文。 |



### 5. Ejs 模板基本语法

```javascript
// 设置默认模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
```

- `<%` '脚本' 标签，用于流程控制，无输出。
- `<%_` 删除其前面的空格符
- `<%=` 输出数据到模板（输出是转义 HTML 标签）
- `<%-` 输出非转义的数据到模板
- `<%#` 注释标签，不执行、不输出内容
- `<%%` 输出字符串 '<%'
- `%>` 一般结束标签
- `-%>` 删除紧随其后的换行符
- `_%>` 将结束标签后面的空格符删除

``` html
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <!-- 解析插入数据 -->
    <h1><%- foo%></h1>
    <!-- 会进行转义 -->
    <h1><%= foo%></h1>

    <h1>条件判断</h1>
    <% if (title) {%>
    <p>我是title标题</p>
    <% } else { %>
    <p>我不是标题</p>
    <% }%>

    <h1>循环渲染</h1>
    <% for(let i = 0; i < list.length;i++) {%>
    <li><%= list[i] %></li>
    <%}%>
  </body>
```

### 6. 中间件

中间件是有顺序的

``` javascript
/* 最简单的中间件 */
app.use(function (req, res, next) {
  console.log('访问任何页面都会调用这个函数')
  req.foo = 'foo'
  req.foo2 = () => {
    console.log('foo2')
  }
  // 如果没有next会截获
  next()
})
```

#### 6.1. 简单跨域处理中间件

``` javascript
/* 跨域处理中间件 */
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-Content-Type', '*')
  next()
})
```

#### 6.2. 路由文件中的中间件

``` javascript
function foo () {
  ....
}
router.get('/index',foo, (req, res) => {
  ....
})
```

#### 6.3. cookie中间件

安装 npm install cookie-parser

``` javascript
var cookieParser = require('cookie-parser')
app.use(cookieParser());
```

