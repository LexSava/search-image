import React, { useState, useEffect } from 'react';
import './Main.scss';
import { Container, Button, Card, Form, FormControl } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Store from '../../store/Store';
import Api from '../../api/flickr';

interface IMain {
  resultsSearch: string;
}

const Main: React.FC<IMain> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<string>('1');
  const [allPages, setAllPages] = useState<string>('1');

  useEffect(() => {
    setSearch(props.resultsSearch);
  }, [props.resultsSearch]);

  useEffect(() => {
    if (search.length != 0) {
      const images = Api.getImages(search, page);

      Store.getImages(images.then((response) => response.data));
      console.log(
        images.then((response) => {
          setAllPages(response.pages);
          console.log(response.pages);
          console.log(response);
          return response.data;
        })
      );
    }
  }, [search, page]);

  const backPage = () => {
    let back = +page;
    if (back > 1) {
      back -= 1;
      setPage(String(back));
    }
  };

  const forwardPage = () => {
    let forward = +page;
    if (forward < +allPages) {
      forward += 1;
      setPage(String(forward));
    }
  };

  return (
    <Container className="p-0 ps-3">
      <Container className="p-0 d-flex justify-content-end pe-3">
        <Button
          variant="outline-dark"
          className="btn-back"
          onClick={() => backPage()}
        >
          <BsChevronLeft className="btn-back-icon" />
          Back
        </Button>
        <Button variant="dark" disabled className="btn-pages">
          Page {page} of {allPages}
        </Button>
        <Button
          variant="outline-dark"
          className="btn-forward"
          onClick={() => forwardPage()}
        >
          Forward
          <BsChevronRight className="btn-forward-icon" />
        </Button>
      </Container>

      <Container className="p-0 mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
            className="card-img"
          />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}

            <Form inline className="w-100 ">
              <Button
                variant="dark"
                // onClick={() => Store.getCounter()}
              >
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
};

export default Main;
