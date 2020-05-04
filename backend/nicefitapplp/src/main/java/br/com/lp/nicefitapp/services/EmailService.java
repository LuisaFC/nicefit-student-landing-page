package br.com.lp.nicefitapp.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import br.com.lp.nicefitapp.domain.Aluno;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private SpringTemplateEngine template;
		
	public void send(Aluno aluno) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, "UTF-8");
		
		Context context = new Context();
		context.setVariable("nome", aluno.getNome());
		context.setVariable("email", aluno.getEmail());
		context.setVariable("telefone", aluno.getTelefone());
		context.setVariable("modalidade", aluno.getModalidade());		
				
		String html = template.process("email/Email", context);		
				
		helper.setTo("email@gmail.com");
		helper.setText(html, true);
		helper.setSubject("Um novo aluno demonstrou interesse!");
		
		mailSender.send(message);
	}
	
}
