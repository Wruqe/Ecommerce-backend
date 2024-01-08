// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey:'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: ProductTag,
  foreignKey: 'tag',
  otherKey:'tag_id',
  onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: ProductTag,
  foreignKey: 'product',
  otherKey: 'product_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
