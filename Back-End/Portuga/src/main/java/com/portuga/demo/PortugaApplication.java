package com.portuga.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.portuga.model.entity"})
@EnableJpaRepositories(basePackages = {"com.portuga.repository"})
@ComponentScan(basePackages = {"com.portuga.controller", "com.portuga.service.impl, com.portuga.service", 
		"com.portuga.security"})
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class PortugaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortugaApplication.class, args);
		
		
	}

}
  