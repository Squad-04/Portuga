package com.portuga.dto;

import java.io.Serializable;

import com.portuga.model.entity.Simulado;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SimuladoDto implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id_simulado;
	
	private String titulo;
	
	/*public Long getId_simulado() {
		return id_simulado;
	}

	public void setId_simulado(Long id_simulado) {
		this.id_simulado = id_simulado;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}*/

	public SimuladoDto() {
		super();
	}
	
	public SimuladoDto(Simulado obj) {
		super();
		this.id_simulado = obj.getId_simulado();
		this.titulo = obj.getTitulo();
	}
}
