ALTER TABLE public.tb_cad_conta_corrente ADD CONSTRAINT fk_cod_cliente_cc FOREIGN KEY (cod_cliente)
REFERENCES public.tb_cad_moteis (cod_cliente) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_cad_usuario ADD CONSTRAINT fk_nivel_permissao FOREIGN KEY (nivel_permissao)
REFERENCES public.tb_nivel_permissao (cod_nivel) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_cad_usuario ADD CONSTRAINT fk_usuario_cod_cliente FOREIGN KEY (cod_motel)
REFERENCES public.tb_cad_moteis (cod_cliente) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_reserva_uapp ADD CONSTRAINT fk_reserva_cliente FOREIGN KEY (cod_cliente)
REFERENCES public.tb_cad_moteis (cod_cliente) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_reserva_uapp ADD CONSTRAINT fk_reserva_uapp FOREIGN KEY (cod_uapp)
REFERENCES public.tb_cad_usuario_app (cod_uapp) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_reserva_uapp ADD CONSTRAINT fk_reserva_quarto FOREIGN KEY (cod_quarto)
REFERENCES public.tb_cad_quartos (cod_quarto) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_reserva_uapp ADD CONSTRAINT fk_status_transacao FOREIGN KEY (cod_status)
REFERENCES public.tb_cad_status_transacao (cod_status) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE public.tb_cad_quartos ADD CONSTRAINT fk_quarto_cliente FOREIGN KEY (cod_cliente)
REFERENCES public.tb_cad_moteis (cod_cliente) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;