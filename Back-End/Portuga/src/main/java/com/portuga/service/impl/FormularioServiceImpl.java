package com.portuga.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Formulario;
import com.portuga.repository.FormularioRepository;
import com.portuga.service.FormularioService;

@Service
public class FormularioServiceImpl implements FormularioService{
	
	@Autowired
	private FormularioRepository repositorio;
	
	@Override
	public Formulario salvarOpiniao(Formulario formulario) {
		return repositorio.save(formulario);
	}
	
	@Override
	public List<Formulario> visualizarOpinioes(){
		return repositorio.findAll();
	}
	
	@Override
	public void deletarOpiniao(Long id) {
		repositorio.findById(id).orElseThrow(() -> 
		new ErroMensagemException("Opinião não Encontrada!"));
		
		repositorio.deleteById(id);
	}
	
	@Override
	public Formulario selecionarOpiniaoPorId(Long id){
		return repositorio.findById(id).orElseThrow(() -> new ErroMensagemException("Opinião não encontrada."));
	}
}
