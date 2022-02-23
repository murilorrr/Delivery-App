module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('Sales_Product', {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'id', 
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sale', 
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'id',
    });
  }

  return SalesProducts;
};