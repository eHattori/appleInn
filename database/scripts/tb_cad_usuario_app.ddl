CREATE TABLE public.tb_cad_usuario_app(
	cod_uapp integer,
	username varchar(100),
	password varchar(50),
	CONSTRAINT un_username UNIQUE (username),
	CONSTRAINT pk_uapp PRIMARY KEY (cod_uapp,username)

);