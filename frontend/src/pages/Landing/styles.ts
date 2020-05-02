import styled from 'styled-components';

export const HeaderBox = styled.div`
  background: #ffffff;
  box-shadow: none;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #06038b;
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: 22%;
    margin-left: 5%;
  }
`;

export const Logo = styled.img`
  width: 160px;
  margin-left: 22%;
`;

export const Box = styled.div`
  background: #dddddd;
  width: 100%;
  height: 400px;
`;
