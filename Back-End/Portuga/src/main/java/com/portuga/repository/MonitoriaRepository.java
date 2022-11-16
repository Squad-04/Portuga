package com.portuga.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portuga.model.entity.Monitoria;

@Repository
public interface MonitoriaRepository extends JpaRepository<Monitoria, Long>{
	
	List<Monitoria> findByUsuario(Integer usuario);
	
}
