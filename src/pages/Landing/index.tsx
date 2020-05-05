import React, { FormEvent, useState, useEffect, useCallback } from 'react';

import { FcManager } from 'react-icons/fc';
import { TextField, Button } from '@material-ui/core';

import {
  HeaderBox,
  Logo,
  Box,
  Content,
  Section,
  SectionForm,
  Footer,
  Logo2,
} from './styles';
import * as emailjs from 'emailjs-com'
import logoImg from '../../assets/Logo.png';

const Landing: React.FC = () => {
  const [nome, setNome] = useState('');
  const [mail, setMail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalidade, setModalidade] = useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleSubmit() {
    let templateParams = {
      nome,
      email: mail,
      telefone,
      modalidade,
      email_to: process.env.REACT_APP_EMAILJS_SENDER,
    }    
             
    emailjs.send(
      'gmail',
      String(process.env.REACT_APP_EMAILJS_TEMPLATEID),
      templateParams,
      String(process.env.REACT_APP_EMAILJS_USERID)
    )
    
    resetForm()
  }

  function resetForm() {
    setNome('');
    setMail('');
    setTelefone('');
    setModalidade('');
  }

  return (
    <>
      <HeaderBox>
        <Logo src={logoImg} alt="niceFit" />
        <p>O mundo está mudando sua academia também!!</p>
      </HeaderBox>
      <Box>
        <div>
          <h1>Nossa Academia Virtual!</h1>
          <h3>
            Da uma olhada nesse vídeo aí do lado, temos uma oportunidade para
            você!!
          </h3>
        </div>

        <iframe
          title="NiceFit"
          src="https://www.youtube.com/embed/Ub7fZQpowFI?autoplay=1rel=0"
          frameBorder="0"
          allow="autoplay; accelerometer; encrypted-media; gyroscope; fullscreen; picture-in-picture"
        />
      </Box>
      <Section>
        <h2>Por que Treinar com um profissional Qualificado?</h2>
        <Content>
          <FcManager size={75} />
          <p>
            Todos somos diferentes não é verdade??? Por este motivo o{' '}
            <strong>SEU</strong> treino tem que ser planejado para VOCÊ!!
            Pilates, FitDance, Hiit, Funcional, Musculação onde você define a
            modalidade e horário que mais se adequa a sua necessidade.
          </p>
        </Content>

        <Content>
          <img
            src="https://img.icons8.com/color/48/000000/laptop--v1.png"
            alt="notebook"
          />
          <p>
            Você não vai apenas repetir movimentos. Haverá um profissional para
            acompanhar e corrigir os exercícios de forma online.
          </p>
        </Content>

        <Content>
          <img
            src="https://img.icons8.com/color/48/000000/expensive-2.png"
            alt="dollar sign"
          />
          <p>
            Você não vai mais pagar academia sem fazer aula, aqui você
            administra seus horários com praticidade, economizando tempo e
            dinheiro.
          </p>
        </Content>

        <Content>
          <img
            src="https://img.icons8.com/color/48/000000/android.png"
            alt="phone"
          />
          <p>
            Uma plataforma que facilitará o contato com o seu professor, gerando
            um rede de relacionamento entre os professores e nossos alunos, tudo
            isso com preços super acessíveis. Você terá seus resultados
            acompanhados por um profissional o tempo todo, e serão definidos na
            primeira aula.
          </p>
        </Content>
      </Section>
      <SectionForm>
        <form>
          <div>
            <TextField
              id="outlined-basic"
              label="Nome Completo"
              variant="outlined"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Telefone"
              variant="outlined"
              placeholder="(xx) 9xxxx-xxxx"
              type="number"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Modalidade que gostaria"
              variant="outlined"
              required
              value={modalidade}
              onChange={(e) => setModalidade(e.target.value)}
            />
          </div>
          <div className="btnPosition">
            <Button
              className="btn"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Quero participar!
            </Button>
          </div>
        </form>
        <div>
          <h1>O Mundo mudou sua academia Também!</h1>
          <h3>
            A Nicefit, tem o objetivo de disponibilizar o acesso ao exercício
            físico onde você estiver, acompanhado e direcionado por um
            profissional capacitado. Agora você tem a oportunidade de um treino
            elaborado para você com preços acessíveis, respeitando seus
            objetivos e particularidades no conforto da sua casa ainda podendo
            desafiar seus amigos.
          </h3>
        </div>
      </SectionForm>
      <Footer>
        <Logo2 src={logoImg} alt="niceFit" />
      </Footer>
    </>
  );
};

export default Landing;
