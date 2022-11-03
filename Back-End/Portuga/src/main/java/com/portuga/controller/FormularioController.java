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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portuga.model.entity.Formulario;
import com.portuga.service.impl.FormularioServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("portuga/formulario")
public class FormularioController {
	
	@Autowired
	private FormularioServiceImpl service;
	
	@GetMapping("/teste")
	public String hello() { 
		return "Estou Funcionando";
	}
	
	@PostMapping
	public ResponseEntity<Formulario> salvarOpiniao(@RequestBody Formulario formulario){
		return new ResponseEntity<Formulario>(service.salvarOpiniao(formulario), HttpStatus.CREATED);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deletarOpiniao(@PathVariable("id") Long id){
		service.deletarOpiniao(id);
		return new ResponseEntity<String>("Opinião Deletada", HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Formulario> selecionarOpiniaoPorId(@PathVariable("id") Long OpiniaoId){
		return new ResponseEntity<Formulario>(service.selecionarOpiniaoPorId(OpiniaoId), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Formulario>> findAll(){
		List<Formulario> opinioes = service.visualizarOpinioes();
		return ResponseEntity.ok().body(opinioes);
	}
}
