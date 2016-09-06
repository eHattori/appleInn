CREATE TABLE public.tb_cad_moteis(
	cod_cliente serial,
	razao_social varchar(200),
	cnpj varchar(200),
	CONSTRAINT pk_cliente PRIMARY KEY (cod_cliente),
	CONSTRAINT un_cnpj UNIQUE (cnpj)

);