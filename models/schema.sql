DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS angelsdb;
CREATE DATABASE angelsdb;

USE angelsdb;
SELECT * FROM purchase_orders
ORDER BY projectName;

