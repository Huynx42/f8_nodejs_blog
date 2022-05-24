const Course = require('../models/Course');

// Path ở file news.js tức app.get('/news'
// function handler ở file NewsController (req,res) => {res.send}

//khai báo class thì viết theo CamelCase
class SiteController {
    //[GET] /
    index(req, res, next) {
        // Course.find({}, function(err,courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // })

        Course.find({})
            .then((courses) =>
                res.render('home', { title: 'Nguyen Xuan Huy', courses }),
            )
            .catch(next);
        // res.render('home', { title: 'Nguyen Xuan Huy' });
    }
    // [GET] /search
    search(req, res) {
        res.render('search', { title: 'search page' });
    }
}

module.exports = new SiteController();
