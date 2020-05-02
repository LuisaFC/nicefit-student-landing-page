package br.com.lp.nicefitapp.services.event.aluno;

import br.com.lp.nicefitapp.domain.Aluno;

public class SalvarAlunoEvent {

	private Aluno aluno;

	public SalvarAlunoEvent(Aluno aluno) {
		this.aluno = aluno;
	}

	public Aluno getAluno() {
		return aluno;
	}

}
