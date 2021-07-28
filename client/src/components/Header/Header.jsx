import "bootstrap/dist/css/bootstrap.min.css";
import './Header.scss';
import React from 'react';
import { Container } from "react-bootstrap";
import { BsPersonBoundingBox } from "react-icons/bs";

function Header() {
  return (
    <Container  className="w-100 p-3 bg-warning text-dark d-flex justify-content-between">
      <div className="ms-4 h4 d-flex align-items-md-center">Image Finder</div>
      <BsPersonBoundingBox className="me-4 user-btn"/>
    </Container>
  );
}

export default Header;
