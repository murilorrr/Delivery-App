module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    // foreignKey é opcional nos models
    // userId: { type: DataTypes.INTEGER, foreignKey: true },
    // sellerId: { type: DataTypes.INTEGER, foreignKey: true },
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
