const express = require('express');
const app = express();
const port = 3000;
//sử dụng morgan: tạo/in thông báo request- từ client
const morgan = require('morgan');
app.use(morgan('combined'));
//Sử dụng template ejs
app.set("view engine","ejs");
app.set("views","./src/resources/views");
app.use(express.static(__dirname + "/src/resources/views"));
//Cấu hình file tĩnh
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// kiểm tra đường dẫn __dirname
// console.log(__dirname); trả lại .../src

// router
app.get('/',(req,res) => {
    res.render('home', {title: "Nguyen Xuan Huy"});
})

app.get('/news',(req,res) => {
    res.render('news', {title: "post soccer"});
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})