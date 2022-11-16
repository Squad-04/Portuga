package com.portuga.service;

import java.util.List;

import com.portuga.model.entity.Questao;

public interface QuestaoService {
	
	List<Questao> findAll(Long id_sim);
	
	Questao create(Long id_sim, Questao obj);

	Questao findById(Long id);
	
	void delete(Long id);
	
	Questao update(Long id, Questao Obj);

}
