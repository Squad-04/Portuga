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
@Table(name="monitoria")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Monitoria {
	
	@Id
	@Column(name="id_monitoria")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="id_usuario")
	private Integer usuario;
	
	@Column
	private String nome;
	
	@Column
	private String pergunta;
	
	@Column
	private String resposta;
	
	@Column
	private String status;

}
