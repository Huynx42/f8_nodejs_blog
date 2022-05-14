// Path ở file news.js tức app.get('/news'
// function handler ở file NewsController (req,res) => {res.send}

//khai báo class thì viết theo CamelCase
class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home', { title: 'Nguyen Xuan Huy' });
    }
    // [GET] /search
    search(req, res) {
        res.render('search', { title: 'search page' });
    }
}

module.exports = new SiteController();
