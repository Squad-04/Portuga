package com.portuga.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Administrador;
import com.portuga.repository.AdministradorRepository;
import com.portuga.service.AdministradorService;

@Service
public class AdministradorServiceImpl implements AdministradorService{
	
	@Autowired
	private AdministradorRepository repositorio;
	
	@Override
	public Administrador salvarAdm(Administrador administrador) {
		validarAcesso(administrador.getAcesso());
		return repositorio.save(administrador);
	}
	
	@Override
	public Administrador atualizarAdm(Administrador administrador, Long id) {
		Administrador admAtual = repositorio.findById(id).orElseThrow(
				() -> new ErroMensagemException("Este Administrador não Existe!"));
		
		admAtual.setNome(administrador.getNome());
		admAtual.setAcesso(administrador.getAcesso());
		admAtual.setSenha(administrador.getSenha());
		admAtual.setNivel_acesso(administrador.getNivel_acesso());
		
		repositorio.save(admAtual);
		return admAtual;
	}
	
	@Override
	public Administrador selecionarAdmPorId(Long id) {
		return repositorio.findById(id).orElseThrow(() ->
		new ErroMensagemException("Administrador não encontrado!"));
	}
	
	@Override
	public List<Administrador> verAdms(){
		return repositorio.findAll();	
	}
	
	@Override
	public void deletarAdm(Long id) {
	 repositorio.findById(id).orElseThrow(() ->
		new ErroMensagemException("Administrador não Encontrado!"));
	
	repositorio.deleteById(id);
	}
	
	@Override
	public void validarAcesso(String acesso) {
		boolean validacao = repositorio.existsByAcesso(acesso);
		
		if(validacao) {
			throw new ErroMensagemException("Esse Acesso já existe!");
		}
	}
}
