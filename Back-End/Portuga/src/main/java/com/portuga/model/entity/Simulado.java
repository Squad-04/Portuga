package com.portuga.model.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "simulado")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Simulado {
	
	/*public Long getId_simulado() {
		return id_simulado;
	}

	public String getTitulo() {
		return titulo;
	}

	public List<Questao> getQuestoes() {
		return questoes;
	}

	public void setId_simulado(Long id_simulado) {
		this.id_simulado = id_simulado;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public void setQuestoes(List<Questao> questoes) {
		this.questoes = questoes;
	}*/

	@Id                                                   
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_simulado;
	
	@Column(length = 150)
	private String titulo;
	
	@OneToMany(mappedBy = "simulado")
	private List <Questao> questoes;
	
}
