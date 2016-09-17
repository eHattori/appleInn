--use appleinndb_test EXECUTE OS SCRIPTS NO AMBIENTE DE TESTE TBM;
use appleinndb;

CREATE TABLE user (
  user_id int(15) NOT NULL AUTO_INCREMENT,
  username varchar(100) NULL,
  password varchar(100) NULL,
  email varchar(256) NULL,
  facebook_id varchar(16) NULL,
  google_id varchar(21) NULL,
  first_name varchar(100) NULL,
  last_name varchar(100) NULL,
  link varchar(300) NULL,
  avatar varchar(300) NULL,
  name varchar(256),
  type char NOT NULL,
  PRIMARY KEY (user_id)  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;