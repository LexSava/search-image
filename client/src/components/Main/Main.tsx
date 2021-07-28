import React from 'react';
import './Main.scss';
import { Container, Button, Card, Form, FormControl } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Store from '../../store/Store';

function Main() {
  return (
    <Container className="p-0 ps-3">
      <Container className="p-0 d-flex justify-content-end pe-3">
        <Button variant="outline-dark" className="btn-back">
          <BsChevronLeft className="btn-back-icon" />
          Back
        </Button>
        <Button variant="dark" disabled className="btn-pages">
          Page 1 of 10
        </Button>
        <Button variant="outline-dark" className="btn-forward">
          Forward
          <BsChevronRight className="btn-forward-icon" />
        </Button>
      </Container>

      <Container className="p-0 mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="holder.js/100px180"
            className="card-img"
          />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}

            <Form inline className="w-100 ">
              <Button variant="dark" onClick={() => Store.getCounter()}>
                Bookmark it!
              </Button>
              <FormControl
                type="text"
                placeholder="Some tags?"
                className="mt-3"
                // value={inputText}
                // onChange={changeHandle}
                // onInput={changeHandle}
                // onKeyPress={keyPressHandler}
              />
            </Form>
          </Card.Body>
        </Card>
      </Container>

      {/* No images here. Whould you try to search for anything else? */}
    </Container>
  );
}

export default Main;
