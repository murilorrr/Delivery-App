'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: '$2a$07$7nmEYiZmu.Y0zNAa/KQAxe7JVoU/qoIDv/UCWOXv3KQ4g2MY9Ze8u',
        role: 'administrator'
      },
      {
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '$2a$07$UL9JWiVenZ1ZISx/cXv6ge0iDjoPzqpFA/IQm5sWrz6SG/ghrOkUO',
        role: 'seller'
      },
      {
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '$2a$07$SFj3bfAXCjX..BLf1ZzG7OYQQ8SQinm4E7.IpxI2Dfcvypig3zRsi',
        role: 'customer'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
