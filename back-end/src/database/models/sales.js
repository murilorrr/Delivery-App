module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    totalPrice: { type: DataTypes.DECIMAL(9,2), field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
    saleDate: { type: DataTypes.DATE, field: 'sale_date' },
    userId: { type: DataTypes.INTEGER, foreignKey: true, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, field: 'seller_id' },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Sales',
    underscored: true,
  });
  Sale.associate = (models) => {
    // para incluir estas infos : { include: [{ model: User, as: 'users' }, { model: User, as: 'seller' }] }
    Sale.belongsTo(models.User, {foreignKey: 'user_id', as: 'users'});
    Sale.belongsTo(models.User, {foreignKey: 'seller_id', as: 'seller'});
  }

  return Sale;
};
