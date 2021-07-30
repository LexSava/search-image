import React, { useState, useEffect } from 'react';
import './Page.scss';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Seacrh from '../Seacrh/Seacrh';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Page() {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  const processSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <Container className="page bg-light p-0">
      <Header />
      <Container className="main-content p-0 d-flex">
        <Menu />
        <Container className="p-0">
          <Seacrh onSearch={processSearch} />
          <Main resultsSearch={search} />
        </Container>
      </Container>

      <Footer />
    </Container>
  );
}

export default Page;
