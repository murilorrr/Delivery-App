module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATETIME,
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.Users, {
      foreignKey: 'id', as: 'user_id',
    });
  };
  Sale.associate = (models) => {
    Sale.belongsTo(models.Users, {
      foreignKey: 'id', as: 'seller_id',
    });
  };

  return Sale;
};
