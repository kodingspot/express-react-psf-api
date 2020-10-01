const employeeModel = require('../models/employee.model');


exports.all = (request, response) => {
  employeeModel.all(request)
    .then(data => {
      response.status(200).send(data);
    }).catch(error => {
      response.status(400).send(error);
    });
};
