package br.com.lp.nicefitapp.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.lp.nicefitapp.domain.Aluno;
import br.com.lp.nicefitapp.services.AlunosService;
import br.com.lp.nicefitapp.validation.ValidateRequestBody;

@RestController
@RequestMapping("/alunos")
public class AlunosController {
	
	@Autowired
	private AlunosService service;
	
	@Autowired
	private ValidateRequestBody validateRequestBody;
	
	@PostMapping
	public ResponseEntity<?> save(@Valid @RequestBody Aluno aluno, BindingResult result) {
		ResponseEntity<?> hasErrors = validateRequestBody.validate(result);
		if (hasErrors != null) return hasErrors;
		service.save(aluno);
		return ResponseEntity.ok().build();
	}
}
