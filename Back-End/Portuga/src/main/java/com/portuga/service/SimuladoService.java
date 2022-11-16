package com.portuga.service;

import java.util.List;

import com.portuga.dto.SimuladoDto;
import com.portuga.model.entity.Simulado;

public interface SimuladoService {
	
	Simulado findById(Long id);
	
	Simulado create(Simulado obj);

	List<Simulado> findAll();

	Simulado update(Long id, SimuladoDto objDto);
	
	void delete (Long id);

}
