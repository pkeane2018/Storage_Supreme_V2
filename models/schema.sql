DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

USE angelsdb;
SELECT * FROM purchase_orders
ORDER BY projectName;
