--use appleinndb_test EXECUTE OS SCRIPTS NO AMBIENTE DE TESTE TBM;
use appleinndb;

CREATE TABLE log(
	name varchar(200),
	hostname varchar(200),
	msg varchar(200),
	pid integer,
	level integer,
	time datetime,
	v integer
);
