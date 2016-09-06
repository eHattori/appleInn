CREATE TABLE public.tb_cad_conta_corrente(
	cod_cc serial,
	cod_cliente integer,
	cod_agencia integer,
	numero_cc varchar(15),
	CONSTRAINT pk_conta_corrente PRIMARY KEY (cod_cliente,cod_agencia,numero_cc)

);