package com.portuga.dto;

import java.io.Serializable;

import com.portuga.model.entity.Questao;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestaoDto implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	/*public Long getId_questao() {
		return id_questao;
	}

	public void setId_questao(Long id_questao) {
		this.id_questao = id_questao;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}*/

	private Long id_questao;
	
	private String titulo;

	public QuestaoDto() {
		super();
	}

	public QuestaoDto(Questao obj) {
		super();
		this.id_questao = obj.getId_questao();
		this.titulo = obj.getTitulo();
	}
	
	
	
}
