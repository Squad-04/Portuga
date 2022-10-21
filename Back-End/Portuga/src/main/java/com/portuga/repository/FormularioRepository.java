package com.portuga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portuga.model.entity.Formulario;

@Repository
public interface FormularioRepository extends JpaRepository<Formulario, Long>{

}
