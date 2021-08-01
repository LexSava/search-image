import 'bootstrap/dist/css/bootstrap.min.css';
import './LoadingScreen.scss';
import React from 'react';
import { Container } from 'react-bootstrap';

interface ILoadingScreen {}

const LoadingScreen: React.FC<ILoadingScreen> = (props) => (
  <Container>
    <div className="container">
      <div className="loader">
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--text" />
      </div>
    </div>
  </Container>
);
export default LoadingScreen;
