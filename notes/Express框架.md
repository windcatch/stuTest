## Express框架

> **Express** 基于  NodeJS  平台，快速、开放、极简的Web开发框架
>
> 它**主要的目的就是使用NodeJS快速的创建Web服务器**

---

### 安装Express框架

首先是初始化项目

```
$ npm init --yes
```

然后通过npm直接安装

```
$ npm install express --save
```

### Express创建项目

> 初始化项目然后安装Express之后，在项目的目录下面，创建一个  `app.js`  文件，完成如下代码

```javascript
const express=require("express");
//express是用于创建Web服务器的一个框架 Web Application
const app=express();
//执行express()方法，生成一个app程序，这个app程序就是项目程序
```

> 创建好Web项目以后，我们启动Express的服务器

```javascript
//启动服务器，监听一个端口号
app.listen(924,()=>{
    console.log("服务器创建成功");
});
```

> 在控制台终端执行如下指令

```
$ node app.js
```

### Express处理GET请求

> express通过    `app.get()`   的方式来处理浏览器发送过来的请求

```javascript
//app.get()处理服务器的get请求
app.get("/",(req,resp)=>{
    //Req：request 代表浏览器到服务器(客户端到服务器)
    //Resp:response 代表服务器到客户端
    resp.send("Hello Express!");//resp.send() 服务器向浏览器发送了文本信息
})
```

![1573925655084](1573925655084.png)

![1573924917943](1573924917943.png)

|           浏览器           |      服务器       |
| :------------------------: | :---------------: |
|   http://localhost:924/    |   app.get(“/”)    |
| http://localhost:924/login | app.get(“/login”) |

**提示**：<font color="blueviolet">浏览器里面的地址栏的请求永远都是GET请求</font>