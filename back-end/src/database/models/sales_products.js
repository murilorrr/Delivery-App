module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales', 
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return SalesProducts;
};