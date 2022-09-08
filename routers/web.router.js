const HomeController = require("../src/controller/home.controller");
const router = require('express').Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const ProductController = require("../src/controller/product.controller");

let productController = new ProductController();


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

router.get('/admin/products', (req, res, next) => {
    productController.index(req, res, next).catch(err => {
        console.log(err.message)
    });
})

router.get('/admin/products/create', (req, res, next) => {
    productController.showFormCreate(req, res, next).catch(err => {
        console.log(err.message)
    });
})

router.post('/admin/products/store', upload.single('image'), (req, res, next) => {
    productController.store(req, res, next);
})

module.exports = router;
