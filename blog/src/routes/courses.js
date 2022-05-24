//route nào cũng phải khai báo 2 biến này
const express = require('express');
const router = express.Router();

//Khởi tạo biến không cần viết hoa chữ cái đầu
const courseController = require('../app/controllers/CourseController');
router.get('/:slug', courseController.show);
//đưa path "/" về dưới cùng vì xử lí đồng bộ

module.exports = router;
