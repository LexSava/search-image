import React, { useState, useEffect } from 'react';
import './Main.scss';
import { Container, Button, Card, Form, FormControl } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Store from '../../store/Store';
import { Api } from '../../api/flickr';
import { IBodyImg, IImgSrc } from '../../common/interfaces';

interface IMain {
  resultsSearch: string;
  section: string;
}

const Main: React.FC<IMain> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<string>('1');
  const [allPages, setAllPages] = useState<string>('1');

  const [idAllImagesPage, setIdAllImagesPage] = useState<Array<IBodyImg>>([]);
  // eslint-disable-next-line
  const [cards, setCards] = useState<any>([]);
  // eslint-disable-next-line
  const [savedCards, setSavedСards] = useState<any>([]);

  useEffect(() => {
    setSearch(props.resultsSearch);
  }, [props.resultsSearch]);

  useEffect(() => {
    if (search.length != 0) {
      const getOnePageImages = Api.getImages(search, page);
      getOnePageImages.then((response) => {
        setAllPages(response.pages);

        setIdAllImagesPage(response.photo.map((item: IBodyImg) => item));
      });
    }
  }, [search, page]);

  const getSavedСards = (elem: IImgSrc) => {
    Store.getSavedImages(elem);
  };

  useEffect(() => {
    setPage('1');
  }, [search]);

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

  useEffect(() => {
    setCards(
      idAllImagesPage.map((img: IBodyImg) => {
        // console.log(img);

        const srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
        return (
          <Card style={{ width: '18rem' }} key={img.id} className="mb-4">
            <Card.Img variant="top" src={srcPath} className="card-img img" />
            <Card.Body>
              <Form inline className="w-100 ">
                <Button variant="dark" onClick={() => getSavedСards(img)}>
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
        );
      })
    );
  }, [idAllImagesPage]);

  if (search.length != 0 && idAllImagesPage.length != 0) {
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

        <Container className="p-0 mt-5 d-flex flex-wrap justify-content-around">
          {cards}
        </Container>
      </Container>
    );
  }
  if (search.length === 0) {
    return (
      <Container className="p-0 ps-3 h5">
        No images here. Try to find anything else?
      </Container>
    );
  }
  return (
    <Container className="p-0 ps-3 h5">
      No images here. Whould you try to search for anything else?
    </Container>
  );
};

export default Main;
