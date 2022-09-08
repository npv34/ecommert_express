const Model = require("./Model");

class CategoryModel extends Model {
    async getAllCategory() {
        let sql = `SELECT * FROM categories`;
        return this.querySQL(sql);
    }
}

module.exports = CategoryModel
