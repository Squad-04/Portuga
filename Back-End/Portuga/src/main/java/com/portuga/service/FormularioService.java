package com.portuga.service;

import java.util.List;
import java.util.Optional;

import com.portuga.model.entity.Formulario;

public interface FormularioService {
	Formulario salvarOpiniao(Formulario formulario);
	List<Formulario> visualizarOpinioes();
	void deletarOpiniao(Long id);
	Formulario selecionarOpiniaoPorId(Long id);
}
