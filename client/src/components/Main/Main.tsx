import React, { useState, useEffect } from 'react';
import './Main.scss';

import Found from './Found/Found';
import Bookmarks from './Bookmarks/Bookmarks';

interface IMain {
  resultsSearch: string;
  section: string;
}

const Main: React.FC<IMain> = (props) => {
  if (props.section === 'found') {
    return (
      <Found resultsSearch={props.resultsSearch} section={props.section} />
    );
  }
  return (
    <Bookmarks resultsSearch={props.resultsSearch} section={props.section} />
  );
};

export default Main;
