package br.com.lp.nicefitapp.validation;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

@Service
public class ValidateRequestBody {

	public ResponseEntity<?> validate(BindingResult result) {
		Map<String, String> response = new HashMap<>();
		if(result.hasErrors()) {			
			result.getFieldErrors().forEach(err -> response.put(err.getField(), err.getDefaultMessage()));
			return new ResponseEntity<Map<String,String>>(response, HttpStatus.BAD_REQUEST);
		}
		return null;
	}
}
