const Course = require('../models/Course');
// const { multipleMongooseToObject } = require("../util/mongoose");
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({ deletedAt: null })
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses,
                    title: 'Khóa học của tôi',
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
