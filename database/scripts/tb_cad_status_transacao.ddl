CREATE TABLE public.tb_cad_status_transacao(
	cod_status serial,
	descricao varchar(200),
	CONSTRAINT pk_status_transacao PRIMARY KEY (cod_status)

);