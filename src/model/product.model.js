const Model = require('./Model')
class ProductModel extends Model {
    async getAllProduct() {
        let sql = `SELECT products.id as 'id', 
                    products.name as 'name',
                    products.price as 'price', 
                    categories.name as 'category'
                    FROM products
                    JOIN categories ON products.category_id = categories.id`;
       return await this.querySQL(sql)
    }
}

module.exports = ProductModel;
