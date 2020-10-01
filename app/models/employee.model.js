const connection = require('../config/db.connection');
const { pagination } = require('../helpers/pagination.helper');

exports.all = (request) => {
  return new Promise((resolve, reject) => {
    let sql = null;
    let payload = null;

    if ( request.query && request.query.search ) {
      // Search feature
      sql = 'SELECT * FROM employee '
      sql += 'WHERE name LIKE ?';
      payload = `%${request.query.search}%`;
    } else if ( 
      request.query && 
      request.query.employee_number && 
      request.query.name && 
      request.query.phone ) {
      // Filter feature
      sql = 'SELECT * FROM employee WHERE ';
      sql += 'employee_number LIKE ? ';
      sql += 'AND (name LIKE ? AND phone LIKE ?)';
      payload = [
        `%${request.query.employee_number}%`,
        `%${request.query.name}%`,
        `%${request.query.phone}%`
      ];
    } else {
      // No filter, only pagination
      sql = 'SELECT * FROM employee';
    }

    connection.query(sql, payload, (err, res) => {
      if ( err ) { reject({error: err}) }
      const total = res ? res.length : 0;
      resolve(pagination(
        request, 
        payload, 
        sql, 
        total, 
        connection
      ));
    });
  });
};