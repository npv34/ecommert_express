const HomeController = require("../src/controller/home.controller");
const router = require('express').Router();

router.get('/', (req, res, next) => {
    HomeController.index(req, res, next);
})

router.get('/users', (req, res, next) => {
    res.render('users/index')
})

router.get('/login', (req, res, next) => {
    res.render('login')
})

router.post('/login', (req, res, next) => {

})

module.exports = router;
