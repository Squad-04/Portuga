package com.portuga.controller;

import java.util.List;
import java.util.stream.Collectors;

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

import com.portuga.dto.SimuladoDto;
import com.portuga.model.entity.Simulado;

import com.portuga.service.impl.SimuladoServiceImpl;


@RestController
@CrossOrigin("*")
@RequestMapping("portuga/simulado")
public class SimuladoController {
	
	@Autowired
	private SimuladoServiceImpl service;
	
	@GetMapping("/{id}")
	public ResponseEntity<Simulado>findById(@PathVariable Long id) { 
		Simulado obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity <List<SimuladoDto>> findAll(){
		List<Simulado> list = service.findAll();
		List<SimuladoDto> listDto = list.stream().map(obj -> new SimuladoDto(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}
	
	@PostMapping
	public ResponseEntity<Simulado> create(@RequestBody Simulado obj){
		return new ResponseEntity<Simulado>(service.create(obj), HttpStatus.CREATED); 
	} 
	
	@PutMapping("/{id}")
	public ResponseEntity<SimuladoDto>update(@PathVariable Long id,@RequestBody SimuladoDto objDto){
		Simulado newObj = service.update(id, objDto);
		return ResponseEntity.ok().body(new SimuladoDto(newObj));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity <String> delete(@PathVariable Long id){
		service.delete(id);
		return new ResponseEntity<String>("Simulado deletado!", 
				HttpStatus.OK);
	}

}