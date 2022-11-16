package com.portuga.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portuga.dto.SimuladoDto;
import com.portuga.exception.ErroMensagemException;
import com.portuga.model.entity.Simulado;
import com.portuga.repository.SimuladoRepository;
import com.portuga.service.SimuladoService;

@Service
public class SimuladoServiceImpl implements SimuladoService {
	
	@Autowired
	private SimuladoRepository repo;
	
	@Override
	public Simulado findById(Long id) {
		
		Optional<Simulado> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ErroMensagemException("Simulado não encontrado!"));
	}
	
	@Override
	public List<Simulado> findAll() {
		return repo.findAll();
	}
	
	@Override
	public Simulado create(Simulado obj) {
		return repo.save(obj);
	}

	
	@Override
	public Simulado update(Long id, SimuladoDto objDto) {
		Simulado obj = findById(id);
		obj.setTitulo(objDto.getTitulo());
		return repo.save(obj);
	}

	public void delete(Long id) {
		findById(id);
		repo.deleteById(id);
	}
}

