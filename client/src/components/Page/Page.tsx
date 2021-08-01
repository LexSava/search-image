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
  const [menuSelector, setMenuSelector] = useState<string>('found');

  useEffect(() => {
    console.log(menuSelector);
  }, [menuSelector]);

  const processSearch = (text: string) => {
    setSearch(text);
  };

  const switchPage = (page: string) => {
    setMenuSelector(page);
  };

  return (
    <Container className="page bg-light p-0">
      <Header />
      <Container className="main-content p-0 d-flex">
        <Menu onSwitchPage={switchPage} />
        <Container className="p-0">
          <Seacrh onSearch={processSearch} />
          <Main resultsSearch={search} section={menuSelector} />
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}

export default Page;
