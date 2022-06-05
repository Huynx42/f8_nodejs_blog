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

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create', {
            title: 'create new course',
        });
    }

    //[POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {});
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course,
                    title: 'EDIT course',
                }),
            )
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
