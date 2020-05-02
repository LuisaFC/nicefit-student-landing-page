import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { HeaderBox, Title, Logo } from './styles';
import logoImg from '../../assets/Logo.png';

const Landing: React.FC = () => {
  return (
    <>
      <HeaderBox>
        <Logo src={logoImg} alt="niceFit" />
        <Title>Nossa Academia Virtual</Title>
      </HeaderBox>
      <Container>
        <Typography> </Typography>
      </Container>
    </>
  );
};

export default Landing;
