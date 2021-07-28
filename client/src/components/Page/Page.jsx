import React from 'react';
import './Page.scss';
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Seacrh from "../Seacrh/Seacrh";
import Menu from "../Menu/Menu";

function Page() {
  return (
    <Container className="page bg-light p-0">
          <Header/>
          <Menu/>
          <Seacrh/>
    </Container>
  );
}

export default Page;
