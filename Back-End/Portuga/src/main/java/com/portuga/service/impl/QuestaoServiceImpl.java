package com.portuga.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Questao;
import com.portuga.model.entity.Simulado;
import com.portuga.repository.QuestaoRepository;
import com.portuga.service.QuestaoService;

@Service
public class QuestaoServiceImpl implements QuestaoService{

	@Autowired
	private QuestaoRepository repo;
	
	@Autowired
	private SimuladoServiceImpl simulado;
	
	@Override
	public Questao findById(Long id) {
		Optional<Questao> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ErroMensagemException("Questao não encontrado!"));
	}

	public List <Questao> findAll(Long id_sim) {
		simulado.findById(id_sim);
		return repo.findAllBySimulado(id_sim);
	}

	public Questao create(Long id_sim, Questao obj) {
		obj.setId_questao(null);
		Simulado sim = simulado.findById(id_sim);
		obj.setSimulado(sim);
		return repo.save(obj);
	}

	public void delete(Long id) {
	Questao obj = findById(id);
	repo.delete(obj);
	}

	public Questao update(Long id, Questao obj) {
		Questao newObj = findById(id);
		
		newObj.setTitulo(obj.getTitulo());
		newObj.setPergunta(obj.getPergunta());
		newObj.setResposta(obj.getResposta());
		
		return repo.save(newObj);
	}
}
