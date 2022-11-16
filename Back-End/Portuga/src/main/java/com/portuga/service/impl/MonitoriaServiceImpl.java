package com.portuga.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Monitoria;
import com.portuga.repository.MonitoriaRepository;
import com.portuga.service.MonitoriaService;

@Service
public class MonitoriaServiceImpl implements MonitoriaService{

	@Autowired
	private MonitoriaRepository repositorio;
	
	@Override
	public Monitoria salvarMonitoria(Monitoria monitoria) {
		monitoria.setStatus("Aberta");
		return repositorio.save(monitoria);
	}
	
	@Override
	public Monitoria selecionarPorId(Long id) {
		return repositorio.findById(id).orElseThrow(() -> 
		new ErroMensagemException("Monitoria não encontrada!"));
	}
	
	@Override
	public void deletarMonitoria(Long id) {
		repositorio.findById(id).orElseThrow(() -> new ErroMensagemException("Id não encontrado"));
		repositorio.deleteById(id);
	}
	
	@Override
	public List<Monitoria> selecionarMonitorias(){
		return repositorio.findAll();	}
	
	@Override
	public Monitoria responderMonitoria(Monitoria monitoria, Long id) {
		Monitoria resposta = repositorio.findById(id).orElseThrow(() -> 
		new ErroMensagemException("Monitoria não encontrada"));
		
		resposta.setStatus("Respondida");
		resposta.setResposta(monitoria.getResposta());
		
		repositorio.save(resposta);
		return resposta;
	}
	
	@Override
	public List<Monitoria> usuarioMonitoria(Integer usuario) {
		return repositorio.findByUsuario(usuario);
	}
}
