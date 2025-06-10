import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
