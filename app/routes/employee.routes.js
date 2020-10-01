module.exports = app => {
  const employeeController = require('../controllers/employee.controller');

  app.get('/employees', employeeController.all);
};