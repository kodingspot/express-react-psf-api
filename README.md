# Express React PSF API
Pagination, Search and Filter use Express as API and React as Frontend.

## SQL
Create database and set config in `app/config/db.config.js`:

```js
module.exports = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_name'
};
```

After that, you can replace code below to create table and create data:

```sql
CREATE TABLE `employee` ( 
 `employee_number` VARCHAR(20) NOT NULL , 
 `name` VARCHAR(200) NOT NULL , 
 `phone` VARCHAR(20) NOT NULL , 
 PRIMARY KEY (`employee_number`)
) ENGINE = InnoDB;

INSERT INTO `employee` (`employee_number`, `name`, `phone`) VALUES
('EMP-001', 'Steven Junior', '879877887'),
('EMP-002', 'Mikha Navaros', '0898987689'),
('EMP-003', 'Steven Edward', '879877887'),
('EMP-004', 'Mikha Navaros', '0898987689'),
('EMP-005', 'Varisha Angel', '9099989879'),
('EMP-006', 'Steven Simon', '09899877');
```

## Run Server
Inside the project root, run the following command and access localhost with port 3001:

```bash
node server.js
```

## API Testing
import `insomnia_express_react_psf_api.json` into the `Insomnia app` to test the API.

