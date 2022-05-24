const Course = require('../models/Course');
//khai báo class thì viết theo CamelCase
class CourseController {
    //[GET] /courses/:slug  -params
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                //render folder courses tìm file show
                res.render('courses/show', {
                    course,
                    title: 'COURSE DETAIL',
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
