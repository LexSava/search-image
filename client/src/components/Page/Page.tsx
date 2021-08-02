import React, { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import './Page.scss';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Seacrh from '../Seacrh/Seacrh';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

interface IPage {}

const Page: React.FC<IPage> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [menuSelector, setMenuSelector] = useState<string>('found');

  const timeout = 1000 * 10;
  const [isIdle, setIsIdle] = useState(false);
  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);
  useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  const processSearch = (text: string) => {
    setSearch(text);
  };

  const switchPage = (page: string) => {
    setMenuSelector(page);
  };
  if (menuSelector === 'found') {
    return (
      <Container className="page bg-light p-0">
        <Header onIndicator={isIdle} />
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
  return (
    <Container className="page bg-light p-0">
      <Header onIndicator={isIdle} />
      <Container className="main-content p-0 d-flex">
        <Menu onSwitchPage={switchPage} />
        <Container className="p-0">
          <Main resultsSearch={search} section={menuSelector} />
        </Container>
      </Container>
      <Footer />
    </Container>
  );
};

export default Page;
