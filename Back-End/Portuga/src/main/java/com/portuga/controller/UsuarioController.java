package com.portuga.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portuga.exception.ErroDeAutenticacao;
import com.portuga.model.entity.Usuario;
import com.portuga.service.impl.UsuarioServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("portuga/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioServiceImpl service;
	
	@PostMapping
	public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario){
		return new ResponseEntity<Usuario>(service.salvarUsuario(usuario), HttpStatus.CREATED); 
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity deletarUsuario(@PathVariable("id") Long id){
		service.deletarUsuario(id);
		return new ResponseEntity<String> ("Usuário Deletado.", HttpStatus.OK);
	}
	
	
	@PutMapping("{id}")
	public ResponseEntity<Usuario> atualizarUsuario(@PathVariable("id") Long id, @RequestBody Usuario usuario){
		return new ResponseEntity<Usuario>(service.atualizarUsuario(usuario, id), HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public  ResponseEntity<Usuario> selecionarUsuario(@PathVariable("id") Long UsuarioId){
		return new ResponseEntity<Usuario>(service.selecionarPorId(UsuarioId), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Usuario>> findAll(){
		List<Usuario> usuarios = service.selecionarUsuarios();
		return ResponseEntity.ok().body(usuarios);
	}
	
	@PostMapping("/autenticar")
	public ResponseEntity validarUsuario(@RequestBody Usuario usuario) {
		try {
			Usuario userAutenticado = service.validarUsuario(usuario.getEmail(), usuario.getSenha());
			return ResponseEntity.ok(userAutenticado);
		}catch (ErroDeAutenticacao e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	@PutMapping("email/{email}")
	public ResponseEntity<Usuario> atualizarPorEmail(@PathVariable("email") String email, @RequestBody Usuario usuario){
		return new ResponseEntity<Usuario>(service.atualizarPorEmail(usuario, email), HttpStatus.OK);
	}
	
}
