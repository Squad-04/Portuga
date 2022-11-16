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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portuga.dto.QuestaoDto;
import com.portuga.model.entity.Questao;
import com.portuga.service.impl.QuestaoServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("portuga/questao")
public class QuestaoController {
	
	@Autowired
	private QuestaoServiceImpl service;
	
	//BUSCAR POR ID
	@GetMapping("/{id}")
	public ResponseEntity<Questao>findById(@PathVariable Long id) { 
		Questao obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	//LISTAR QUESTOES POR SIMULADO (localhost:8080/portuga/questao?simulado={id}
	@GetMapping
	public ResponseEntity <List<QuestaoDto>> findAll(@RequestParam(value = "simulado", defaultValue ="0")Long id_sim){
		List<Questao> list = service.findAll(id_sim);
		List<QuestaoDto> listDto = list.stream().map(obj -> new QuestaoDto(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}
	
	//CRIAR QUESTOES DENTRO DE UM SIMULADO (localhost:8080/portuga/questao?simulado={id}
	@PostMapping
	public ResponseEntity <Questao> create(@RequestParam(value = "simulado", defaultValue = "0")Long id_sim,
										  @RequestBody Questao obj){
		return new ResponseEntity<Questao>(service.create(id_sim, obj), HttpStatus.CREATED);
	}
	
	//ATUALIZAR QUESTOES POR ID
	@PutMapping("/{id}")
	public ResponseEntity <Questao> update(@PathVariable Long id,
										    @RequestBody Questao obj){
		Questao newObj = service.update(id, obj);
		return ResponseEntity.ok().body(newObj);
	}
	
	//DELETAR QUESTÕES PELO ID
	@DeleteMapping("/{id}")
	public ResponseEntity <String> delete(@PathVariable Long id){
		service.delete(id);
		return new ResponseEntity<String>("Questao deletada!", 
				HttpStatus.OK);
	
	}
}