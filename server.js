
      
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 模拟用户数据库
const users = {
    "1234567890": { username: "1234567890", password: "password123" }
};

// 注册路由
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        res.status(400).send("该手机号已注册，请前往登录。");
    } else {
        users[username] = { username, password };
        res.send("注册成功！");
    }
});

// 登录路由
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users[username];
    if (user && user.password === password) {
        res.send("登录成功！");
    } else {
        res.status(400).send("账号或者密码有误。");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

 