import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/GitHubCorner';
import ButtonIniciar from '../src/components/Buttons';

// const BackgroundImage = styled.div`
//    background-image: url(${db.bg});
//    flex: 1;
//    background-size: cover;
//    background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 35%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta </p>
          </Widget.Content>
          <ButtonIniciar>Nao sei</ButtonIniciar>

        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>é o meu quiz sem tema aparente ainda</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/JorgeLins" />
    </QuizBackground>
  );
}
