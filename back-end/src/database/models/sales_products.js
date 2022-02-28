module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('Sales_Product', {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts'
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id', 
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sale', 
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return SalesProducts;
};