package br.com.lp.nicefitapp.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import br.com.lp.nicefitapp.domain.Aluno;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender mailSender;
		
	public void send(Aluno aluno) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, "UTF-8");
		
		// montar template com as informações do aluno...		
		
		// Destinatário
		helper.setTo("email@email.com");
		helper.setText("O aluno: " + aluno.getNome() + " está interessado", true);
		helper.setSubject("Um novo aluno demonstrou interesse!");
		
		mailSender.send(message);
	}
	
}
