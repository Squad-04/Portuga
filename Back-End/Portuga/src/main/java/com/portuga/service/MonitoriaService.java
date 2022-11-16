package com.portuga.service;

import java.util.List;

import com.portuga.model.entity.Monitoria;

public interface MonitoriaService {

	Monitoria salvarMonitoria(Monitoria monitoria);
	List<Monitoria> selecionarMonitorias();
	Monitoria selecionarPorId(Long id);
	void deletarMonitoria(Long id);
	Monitoria responderMonitoria(Monitoria monitoria, Long id);
	List<Monitoria> usuarioMonitoria(Integer usuario);
}
