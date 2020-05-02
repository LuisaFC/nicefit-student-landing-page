import React from 'react';

import { Typography } from '@material-ui/core';
import { HeaderBox, Logo, Box } from './styles';
import logoImg from '../../assets/Logo.png';

const Landing: React.FC = () => {
  return (
    <>
      <HeaderBox>
        <Logo src={logoImg} alt="niceFit" />
        <p>O mundo está mudando sua academia também!!</p>
      </HeaderBox>
      <Box>
        <h1>Nossa Academia Virtual</h1>
        <h3>
          Da uma olhada nesse vídeo aí do lado, temos uma oportunidade para
          você!!
        </h3>
        <iframe
          title="NiceFit"
          src="https://www.youtube.com/embed/Ub7fZQpowFI?autoplay=1rel=0"
          frameBorder="0"
          allow="autoplay; accelerometer; encrypted-media; gyroscope; fullscreen; picture-in-picture"
        />
      </Box>
    </>
  );
};

export default Landing;
