import React from 'react';
import './Page.scss';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Seacrh from '../Seacrh/Seacrh';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

function Page() {
  return (
    <Container className="page bg-light p-0">
      <Header />
      <Container className="main p-0">
        <Menu />
        <Seacrh />
      </Container>
      <Footer />
    </Container>
  );
}

export default Page;
