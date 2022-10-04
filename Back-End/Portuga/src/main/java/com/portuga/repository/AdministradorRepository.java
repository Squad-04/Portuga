package com.portuga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portuga.model.entity.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long>{
	
	boolean existsByAcesso(String email);
}
