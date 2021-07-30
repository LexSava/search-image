import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BsPersonBoundingBox } from 'react-icons/bs';

function Header() {
  return (
    <header className="w-100 p-3 background-header text-dark d-flex justify-content-between">
      <div className="ms-4 h4 d-flex align-items-md-center color-header">
        Image Finder
      </div>
      <BsPersonBoundingBox className="me-4 user-btn color-header" />
    </header>
  );
}

export default Header;
