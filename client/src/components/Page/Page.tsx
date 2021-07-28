import React from 'react';
import './Page.scss';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Seacrh from '../Seacrh/Seacrh';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Page() {
  return (
    <Container className="page bg-light p-0">
      <Header />
      <Container className="main-content p-0 d-flex">
        <Menu />
        <Container className="p-0">
          <Seacrh />
          <Main />
        </Container>
      </Container>

      <Footer />
    </Container>
  );
}

export default Page;
