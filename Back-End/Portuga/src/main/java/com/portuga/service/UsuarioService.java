package com.portuga.service;

import java.util.List;
import java.util.Optional;

import com.portuga.model.entity.Usuario;

public interface UsuarioService {
		Usuario salvarUsuario(Usuario usuario);
		List<Usuario> selecionarUsuarios();
		Usuario selecionarPorId(Long id);
		Usuario atualizarUsuario(Usuario usuario, Long id);
		void deletarUsuario(Long id);
		void validarEmail(String Email);
		Usuario validarUsuario(String email, String senha);
		Usuario atualizarPorEmail(Usuario usuario, String email);
		void deletarPorEmail(String email);
}
