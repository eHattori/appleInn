--use appleinndb_test EXECUTE OS SCRIPTS NO AMBIENTE DE TESTE TBM;
use appleinndb;

CREATE TABLE user (
  user_id int(15) NOT NULL AUTO_INCREMENT,  
  username varchar(16) NOT NULL,
  password varchar(32) NOT NULL,
  email varchar(256) NOT NULL,
  type char NOT NULL,
  PRIMARY KEY (user_id)  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;