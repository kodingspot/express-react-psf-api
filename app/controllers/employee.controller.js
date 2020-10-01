const PelangganModel = require('../models/employee.model');


exports.all = (request, response) => {
  PelangganModel.all(request)
    .then(data => {
      response.status(200).send(data);
    }).catch(error => {
      response.status(400).send(error);
    });
};
