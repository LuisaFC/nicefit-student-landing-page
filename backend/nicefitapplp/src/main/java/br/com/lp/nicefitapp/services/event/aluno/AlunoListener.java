package br.com.lp.nicefitapp.services.event.aluno;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import br.com.lp.nicefitapp.exceptions.SendEmailException;
import br.com.lp.nicefitapp.services.EmailService;

@Component
public class AlunoListener {
	
	@Autowired
	private EmailService mailService;

	@EventListener
	public void saveAluno(SalvarAlunoEvent event) {
		try {
			mailService.send(event.getAluno());
		} catch (MessagingException e) {			
			throw new SendEmailException("Não foi possível fazer o envio de email");
		}
	}
}
