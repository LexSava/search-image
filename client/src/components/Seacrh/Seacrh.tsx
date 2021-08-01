import 'bootstrap/dist/css/bootstrap.min.css';
import './Seacrh.scss';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

import Store from '../../store/Store';

interface ISearch {
  onSearch(text: string): void;
}

const Seacrh: React.FC<ISearch> = (props) => {
  const [inputText, setInputText] = useState<string>(Store.search);
  const [startSearch, setStartSearch] = useState<string>('');

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      Store.getSearchQuery(inputText);
      setStartSearch(inputText);
      event.preventDefault();
    }
  };

  useEffect(() => {
    props.onSearch(startSearch);
  }, [startSearch]);

  // eslint-disable-next-line
  const renderTooltip = (prop: any) => (
    <Tooltip {...prop} className="mt-2">
      Click Enter to search!
    </Tooltip>
  );

  return (
    <Container className="search-block w-100 p-3 text-dark d-flex justify-content-between ">
      <Form inline className="d-flex w-100 justify-content-end ">
        <OverlayTrigger
          placement="bottom-start"
          overlay={renderTooltip}
          trigger="focus"
        >
          <FormControl
            type="search"
            placeholder="Find images"
            className=""
            autoFocus
            value={inputText}
            // onChange={changeHandle}
            onInput={changeHandle}
            onKeyPress={keyPressHandler}
          />
        </OverlayTrigger>
      </Form>
    </Container>
  );
};

export default Seacrh;
