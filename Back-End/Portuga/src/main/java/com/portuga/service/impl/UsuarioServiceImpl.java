package com.portuga.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Usuario;
import com.portuga.repository.UsuarioRepository;
import com.portuga.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{
	
	@Autowired
	private UsuarioRepository repositorio;
	
	@Override
	public Usuario salvarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		return repositorio.save(usuario);
	}
	
	@Override
	public Optional<Usuario> selecionarPorId(Long id){
		return repositorio.findById(id);
	}
	
	@Override
	public void deletarUsuario(Long id) {
		repositorio.findById(id).orElseThrow(() -> 
		new ErroMensagemException("Usuário não encontrado"));
		
		repositorio.deleteById(id);
	}
	
	@Override
	public Usuario atualizarUsuario(Usuario usuario, Long id) {
		Usuario userAtual = repositorio.findById(id).orElseThrow(
				() -> new ErroMensagemException("Usuário não encontradr"));
		
		userAtual.setNome(usuario.getNome());
		userAtual.setEmail(usuario.getEmail());
		userAtual.setSenha(usuario.getSenha());
		userAtual.setEndereco(usuario.getEndereco());
		
		repositorio.save(userAtual);
		return userAtual;
	}	
	
	@Override
	public Usuario validarUsuario(String email, String senha) {
		Optional<Usuario> usuario = repositorio.findByEmail(email);
		
		if(!usuario.isPresent()) {
			throw new ErroMensagemException("Usuáiro não encontrado");
		}
		
		if(!usuario.get().getSenha().equals(senha)) {
			throw new ErroMensagemException("Senha Incorreta.");
		}
		
		return usuario.get();
	}
	
	@Override
	public void validarEmail(String email){
		boolean verificacao = repositorio.existsByEmail(email);
		
		if(verificacao == true) {
			throw new ErroMensagemException("Esse email já está cadastrado!");
		}
	}
	
	@Override 
	public List<Usuario> selecionarUsuarios(){
		return repositorio.findAll();	}
	
	
}
