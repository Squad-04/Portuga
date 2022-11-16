package com.portuga.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "questao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Questao {
	
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
	}

	public String getPergunta() {
		return pergunta;
	}

	public void setPergunta(String pergunta) {
		this.pergunta = pergunta;
	}

	public String getResposta() {
		return resposta;
	}

	public void setResposta(String resposta) {
		this.resposta = resposta;
	}

	public Simulado getSimulado() {
		return simulado;
	}

	public void setSimulado(Simulado simulado) {
		this.simulado = simulado;
	}*/

	@Id                                                   
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_questao;
	
	@Column(length = 150)
	private String titulo;
	
	@Column(length = 7000)
	private String pergunta;
	
	@Column(length = 7000)
	private String resposta;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_simulado")
	private Simulado simulado;
}
