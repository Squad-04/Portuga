package com.portuga.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Usuario;
import com.portuga.repository.UsuarioRepository;
import com.portuga.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{
	
	private final PasswordEncoder encoder;
	
	
	
	public UsuarioServiceImpl(PasswordEncoder encoder, UsuarioRepository repositorio) {
		super();
		this.encoder = encoder;
		this.repositorio = repositorio;
	}

	@Autowired
	private UsuarioRepository repositorio;
	
	@Override
	public Usuario salvarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		return repositorio.save(usuario);
	}
	
	@Override
	public Usuario selecionarPorId(Long id){
		return repositorio.findById(id).orElseThrow(() -> new ErroMensagemException("Usuario não encontrado."));
	}
	
	@Override
	public void deletarUsuario(Long id) {
		repositorio.findById(id).orElseThrow(() -> new 
				ErroMensagemException("Usuário não encontrado."));
		repositorio.deleteById(id);
	}
	
	@Override
	public Usuario atualizarUsuario(Usuario usuario, Long id) {
		Usuario userAtual = repositorio.findById(id).orElseThrow(
				() -> new ErroMensagemException("Usuário não encontrado"));
		
		userAtual.setNome(usuario.getNome());
		userAtual.setEmail(usuario.getEmail());
		userAtual.setSenha(usuario.getSenha());
		userAtual.setEndereco(usuario.getEndereco());
		userAtual.setCidade(usuario.getCidade());
		userAtual.setEstado(usuario.getEstado());
		userAtual.setNumero(usuario.getNumero());
		
		repositorio.save(userAtual);
		return userAtual;
	}	
	
	@Override
	public Usuario validarUsuario(String email, String senha) {
		Optional<Usuario> usuario = repositorio.findByEmail(email);
		
		if(!usuario.isPresent()) {
			throw new ErroMensagemException("Usuáiro não encontrado");
		}
		
		if(!encoder.matches(senha, usuario.get().getSenha())) {
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
	
	@Override
	public Usuario atualizarPorEmail(Usuario usuario, String email) {
		Usuario usuarioAtual = repositorio.findByEmail(email).orElseThrow(
				() -> new ErroMensagemException("Usuário não encontrado"));

		usuarioAtual.setNome(usuario.getNome());
		usuarioAtual.setEmail(usuario.getEmail());
		usuarioAtual.setSenha(usuario.getSenha());
		usuarioAtual.setEndereco(usuario.getEndereco());
		usuarioAtual.setCidade(usuario.getCidade());
		usuarioAtual.setEstado(usuario.getEstado());
		usuarioAtual.setNumero(usuario.getNumero());
		
		repositorio.save(usuarioAtual);
		return usuarioAtual;	
	}
	
	@Override
	public void deletarPorEmail(String email) {
		Usuario user = repositorio.findByEmail(email).orElseThrow(() -> 
		new ErroMensagemException("Usuário não encontrado."));
		repositorio.delete(user);
	}
	
	
}
