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

import com.portuga.model.entity.Administrador;
import com.portuga.service.impl.AdministradorServiceImpl;


@RestController
@CrossOrigin("*")
@RequestMapping("portuga/administrador")
public class AdministradorController {
	
	@Autowired
	private AdministradorServiceImpl service;
	
	@PostMapping
	public ResponseEntity<Administrador> salvarAdm(@RequestBody Administrador admnistrador){
		return new ResponseEntity<Administrador>(service.salvarAdm(admnistrador), HttpStatus.CREATED);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deletarAdm(@PathVariable("id_adm") Long id){
		service.deletarAdm(id);
		
		return new ResponseEntity<String>("Admnistrador Deletado.", HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Administrador> atualizarAdm(@PathVariable("id_adm") Long id, Administrador administrador){
		return new ResponseEntity<Administrador>(service.atualizarAdm(administrador, id), HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Administrador> selecionarAdmPorId(@PathVariable("id_adm") Long AdmId){
		return new ResponseEntity<Administrador>(service.selecionarAdmPorId(AdmId), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Administrador>> findAll(){
		List<Administrador> adms = service.verAdms();
		return ResponseEntity.ok().body(adms);
	}
}
