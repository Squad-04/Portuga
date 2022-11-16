package com.portuga.controller;

import java.util.List;
import java.util.Optional;

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

import com.portuga.model.entity.Monitoria;
import com.portuga.service.impl.MonitoriaServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("portuga/monitoria")
public class MonitoriaController {

	@Autowired
	private MonitoriaServiceImpl service;
	
	@PostMapping
	public ResponseEntity<Monitoria> salvarMonitoria(@RequestBody Monitoria monitoria){
		return new ResponseEntity<Monitoria>(service.salvarMonitoria(monitoria), HttpStatus.CREATED);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity deletarMonitoria(@PathVariable("id") Long id) {
		service.deletarMonitoria(id);
		return new ResponseEntity<String> ("Monitoria deletada", HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Monitoria>> selecionarTodas(){
		List<Monitoria> monitorias = service.selecionarMonitorias();
		return ResponseEntity.ok().body(monitorias);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Monitoria> selecionarPorId(@PathVariable("id") Long MonitoriaId){
		return new ResponseEntity<Monitoria>(service.selecionarPorId(MonitoriaId), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Monitoria> responderMonitoria(@PathVariable("id") Long id, @RequestBody Monitoria monitoria){
		return new ResponseEntity<Monitoria>(service.responderMonitoria(monitoria, id), HttpStatus.OK);
	}
	
	@GetMapping("/usuario/{usuario}")
	public ResponseEntity<List<Monitoria>> selecionarPorUserId(@PathVariable("usuario") Integer usuario){
		List<Monitoria> usuarioMonitoria = service.usuarioMonitoria(usuario);
		return ResponseEntity.ok().body(usuarioMonitoria);
	}
}
