package br.com.lp.nicefitapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import br.com.lp.nicefitapp.domain.Aluno;
import br.com.lp.nicefitapp.services.event.aluno.SalvarAlunoEvent;

@Service
public class AlunosService {
	
	@Autowired
	private ApplicationEventPublisher publisher;

	public void save(Aluno aluno) {				
		publisher.publishEvent(new SalvarAlunoEvent(aluno));
	}
}
