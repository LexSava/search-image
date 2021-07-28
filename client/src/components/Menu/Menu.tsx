import React from 'react';
import './Menu.scss';
import { Nav} from "react-bootstrap";
import { BsCloudFill, BsFolderFill } from "react-icons/bs";

function Menu() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column block-example menu-border h-75 p-3 position-absolute">
      {/* <Nav.Link eventKey="link-1">Link</Nav.Link> */}
      <Nav.Link eventKey="link-1" className="mt-3 link-dark" >
      <BsCloudFill className="linck-icon"/>
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="mt-3 link-dark">
      <BsFolderFill className="linck-icon"/>
      </Nav.Link>
    </Nav>
  );
}

export default Menu;
