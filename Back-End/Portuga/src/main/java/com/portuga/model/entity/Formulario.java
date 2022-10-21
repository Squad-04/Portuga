package com.portuga.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="formulario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Formulario {
	
	@Id
	@Column(name="id_opiniao")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private Integer idade;
	
	@Column(name="avaliacao_plataforma")
	private String avaliacaoPlataforma;
	
	@Column(name="avaliacao_simulado")
	private String avaliacaoSimulado;
	
	@Column
	private String indicaria;
	
	@Column
	private String mensagem;
}
