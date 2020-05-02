import styled, { css } from 'styled-components';

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
  background: #06038b;
  width: 100%;
  height: 400px;
  display: flex;

  div {
    width: 400px;
    text-align: center;
    margin: auto;
  }

  h1 {
    font-size: 42px;
    color: #fff;
    font-weight: 600;
  }

  h3 {
    color: #fff;
    font-size: 22px;
    font-weight: 400;
  }

  iframe {
    width: 640px;
    height: 360px;
    margin: auto;
  }
`;

export const Section = styled.div`
  padding: 90px 2%;

  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  width: 25%;
  text-align: center;
  float: left;
  margin-top: 50px;
  padding-left: 2%;
  padding-right: 2%;

  p {
    margin-top: 20px;
    margin-bottom: 80px;
  }

  img {
    width: 75px;
  }
`;

export const SectionForm = styled.div`
  background: #1eb909;
  width: 100%;
  height: 600px;
  display: flex;
  padding: 6%;

  form {
    margin-left: 8%;
    display: block;
    background: #fdfdfd;
    border-radius: 5%;
    height: 105%;
    padding: 2%;

    div {
      width: 450px;

      & + div {
        margin-top: 4%;
      }
    }

    .btnPosition {
      margin-left: 50%;
    }

    .btn {
      padding-right: 5%;
      padding-left: 5%;
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      font-weight: 600;
    }
  }

  > div {
    width: 500px;
    text-align: center;
    margin: auto;
  }

  h1 {
    font-size: 36px;
    color: #000;
    font-weight: 600;
  }

  h3 {
    color: #000;
    font-size: 18px;
    font-weight: 400;
    margin-top: 25px;
  }
`;
