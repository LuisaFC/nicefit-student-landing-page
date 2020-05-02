package br.com.lp.nicefitapp.exceptions;

public class SendEmailException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public SendEmailException(String msg) {
		super(msg);
	}
}
