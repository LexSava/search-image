import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { Nav } from 'react-bootstrap';
import { BsCloud, BsFolder } from 'react-icons/bs';

interface IMenu {
  onSwitchPage(text: string): void;
}

const Menu: React.FC<IMenu> = (props) => {
  const [section, setSection] = useState<string>('found');

  const switchSection = (toggle: string) => {
    setSection(toggle);
  };

  useEffect(() => {
    props.onSwitchPage(section);
  });

  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column block-example menu-block p-2"
    >
      <Nav.Link eventKey="link-1" className="mt-3 link-dark">
        <BsCloud
          className="linck-icon"
          onClick={() => switchSection('found')}
        />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="mt-3 link-dark">
        <BsFolder
          className="linck-icon"
          onClick={() => switchSection('bookmark')}
        />
      </Nav.Link>
    </Nav>
  );
};

export default Menu;
