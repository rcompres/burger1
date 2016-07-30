use burgers_db;

CREATE TABLE burgers ( id integer not null AUTO_INCREMENT, burger_name varchar(255) NOT NULL, devoured BOOLEAN DEFAULT false NOT NULL, PRIMARY KEY (id), timeeaten timestamp);


