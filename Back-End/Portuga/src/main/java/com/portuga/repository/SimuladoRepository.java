package com.portuga.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portuga.model.entity.Simulado;

@Repository
public interface SimuladoRepository extends JpaRepository<Simulado, Long> {


}
