import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';
import React from 'react';

function Footer() {
  return (
    <footer className="w-100 p-3 background-header text-dark d-flex justify-content-between">
      <div className="ms-4 h4 d-flex align-items-md-center color-header">
        <a
          href="https://github.com/LexSava"
          target="_blank"
          className="text-dark"
        >
          App developer
        </a>
      </div>
    </footer>
  );
}

export default Footer;
