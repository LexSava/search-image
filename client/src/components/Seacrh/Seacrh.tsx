import 'bootstrap/dist/css/bootstrap.min.css';
import './Seacrh.scss';
import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import Store from '../../store/Store';
// import { observer } from 'mobx-react-lite';

const Seacrh = () => {
  // const [searchText, setSearchText] = useState<string>("Search");
  const [inputText, setInputText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    Store.getSearchQuery(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  // const enteredSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   Store.getSearchQuery(inputText);
  // };

  // console.log(inputText);

  return (
    <Container className="search-block w-100 p-3 text-dark d-flex justify-content-between ">
      <Form inline className="d-flex w-100 justify-content-end ">
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
      </Form>
    </Container>
  );
};

export default Seacrh;
