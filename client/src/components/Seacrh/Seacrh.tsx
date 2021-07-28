import 'bootstrap/dist/css/bootstrap.min.css';
import './Seacrh.scss';
import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';

function Seacrh() {
  // const [searchText, setSearchText] = useState<string>("Search");

  return (
    <Container className="search-block w-100 p-3 text-dark d-flex justify-content-between ">
      <Form inline className="d-flex w-100 justify-content-end ">
        <FormControl
          type="search"
          placeholder="Find images"
          className=""
          autoFocus
          // value={inputText}
          // onChange={changeHandle}
          // onInput={changeHandle}
          // onKeyPress={keyPressHandler}
        />
        <Button
          variant="dark"
          // onClick={inputLog}
        >
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default Seacrh;
