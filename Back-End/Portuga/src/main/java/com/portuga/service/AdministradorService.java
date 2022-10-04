package com.portuga.service;

import java.util.List;

import com.portuga.model.entity.Administrador;

public interface AdministradorService {
	Administrador salvarAdm(Administrador administrador);
	List<Administrador> verAdms();
	Administrador selecionarAdmPorId(Long id);
	Administrador atualizarAdm(Administrador administrador, Long id);
	void deletarAdm(Long id);
	void validarAcesso(String Acesso);
}	
