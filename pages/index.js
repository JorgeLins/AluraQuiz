/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/GitHubCorner';
import ButtonIniciar from '../src/components/Buttons';
import Input from '../src/components/Input';

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
  const router = useRouter();
  const [name, setName] = React.useState(' ');
  console.log(name, setName);
  return (

    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>Alura Quiz - Cinema</title>
      </Head>
      <QuizContainer>

        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Movie Quiz Alura</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);

              console.log('mandando uma submissao por meio do react');
            }}
            >
              <Input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite o seu nome"
              />

              <ButtonIniciar type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </ButtonIniciar>
            </form>
          </Widget.Content>
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
