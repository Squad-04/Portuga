package com.portuga.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.portuga.model.entity.Questao;

@Repository
public interface QuestaoRepository extends JpaRepository<Questao, Long>{

	@Query("SELECT obj FROM Questao obj WHERE obj.simulado.id_simulado = :id_sim ORDER BY titulo")
	List<Questao> findAllBySimulado(@Param(value = "id_sim")Long id_sim);

}
