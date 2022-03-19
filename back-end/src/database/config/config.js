require('dotenv').config();

const options = {
  url: process.env.DATABASE_URL || '',
  host: process.env.DATABASE_HOST || 'mysql',
  port: process.env.DATABASE_PORT || '3306',
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'delivery-app-dev',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
