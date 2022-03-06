const updateSaleStatus = require('../services/sales/updateSaleStatus');

module.exports = async (io) => {
  io.on('connection', (socket) => {
    socket.on('updateStatus', async ({ saleId, status }) => {
      try {
        await updateSaleStatus({ saleId, status });
        io.emit('statusUpdated', { saleId, status });
      } catch (error) {
        console.log(error);
        io.emit('error', 'unable to update status');
      }
    });
  });
};