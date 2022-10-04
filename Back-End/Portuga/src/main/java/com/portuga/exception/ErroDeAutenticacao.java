package com.portuga.exception;

public class ErroDeAutenticacao extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	
	public ErroDeAutenticacao(String mensagem) {
		super(mensagem);
	}
}
