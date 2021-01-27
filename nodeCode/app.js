const express = require('express');
const app = express();
//全局路由托管加载 当中间件加载
const router = require('./router');
app.use('/',router);
const server = app.listen(5001,function(){
    const {address, port} = server.address();
    console.log('address,port',address,port);
})