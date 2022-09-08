const ProductModel = require("../model/product.model");
const CategoryModel = require("../model/category.model");

class ProductController {

    productModel;
    categoryModel;

    constructor() {
        this.productModel = new ProductModel()
        this.categoryModel = new CategoryModel()
    }

    async index(req, res, next) {
        let data = await this.productModel.getAllProduct();
        res.render('products/list', {products: data})
    }

    async showFormCreate(req, res, next) {
        let categories = await this.categoryModel.getAllCategory();
        console.log(categories)
        res.render('products/add', {data: categories})
    }

    store(req, res, next) {
        console.log(req.body)
        res.end()
    }
}

module.exports = ProductController;
