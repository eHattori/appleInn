CREATE TABLE public.tb_cad_quartos(
	cod_quarto serial,
	numero_quarto integer,
	cod_cliente integer,
	CONSTRAINT pk_quarto PRIMARY KEY (cod_quarto),
	CONSTRAINT un_quarto_cliente UNIQUE (numero_quarto,cod_cliente)

);