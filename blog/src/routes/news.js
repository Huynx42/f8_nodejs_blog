//route nào cũng phải khai báo 2 biến này
const express = require('express');
const router = express.Router();

//Cau hinh route.
// Path ở file news.js tức app.get('/news'
// function handler ở file NewsController tức (req,res) => {res.send}

//Khởi tạo biến không cần viết hoa chữ cái đầu
const newsController = require('../app/controllers/NewsController');
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
//đưa path "/" về dưới cùng vì xử lí đồng bộ

module.exports = router;
