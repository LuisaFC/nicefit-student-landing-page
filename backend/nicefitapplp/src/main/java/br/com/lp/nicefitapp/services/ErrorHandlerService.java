package br.com.lp.nicefitapp.services;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.com.lp.nicefitapp.exceptions.ApiError;

@ControllerAdvice
public class ErrorHandlerService {

	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	public ResponseEntity<?> methodNotAllowed(HttpServletRequest request) {
		int status = HttpStatus.METHOD_NOT_ALLOWED.value();
		String error = "Method Not Allowed";
		String message = "Request method "+ request.getMethod() + " not supported";
		ApiError response = new ApiError(status, error, message);
		return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(response);
	}
	
}
