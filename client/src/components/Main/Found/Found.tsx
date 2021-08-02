import React, { useState, useEffect } from 'react';
import './Found.scss';
import { Container, Button, Card, Form, FormControl } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import _ from 'lodash';
import Store from '../../../store/Store';
import { Api } from '../../../api/flickr';
import { IBodyImg, IImgSrc } from '../../../common/interfaces';

interface IFound {
  resultsSearch: string;
  section: string;
}

const Found: React.FC<IFound> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<string>('1');
  const [allPages, setAllPages] = useState<string>('1');
  const [inputText, setInputText] = useState<string>('');
  const [allImagesPage, setAllImagesPage] = useState<Array<IBodyImg>>([]);
  // eslint-disable-next-line
  const [cards, setCards] = useState<any>([]);

  const [savedImg, setSavedImg] = useState<Array<IBodyImg>>([]);

  useEffect(() => {
    setSearch(props.resultsSearch);
  }, [props.resultsSearch]);

  useEffect(() => {
    setSavedImg(Store.savedImages);
  }, []);

  useEffect(() => {
    if (search.length != 0) {
      const getOnePageImages = Api.getImages(search, page);
      getOnePageImages.then((response) => {
        setAllPages(response.pages);

        setAllImagesPage(response.photo.map((item: IBodyImg) => item));
        Store.getpageWithImages(response.photo.map((item: IBodyImg) => item));
      });
    }
  }, [search, page]);

  const enteredTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const getSavedСards = (elem: IImgSrc) => {
    Store.getSavedImages(elem);
    setSavedImg(Store.savedImages);
  };

  const addTagImage = (id: string, tag: string) => {
    // const elem = { id, tag };
    Store.getTagsForImages({ id, tag });
    console.log({ id, tag });
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
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
      Store.pageWithImages.map((img: IBodyImg) => {
        const srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
        let stateButton: boolean = false;
        const disableButtons = (imgage: IBodyImg) => {
          const disable = savedImg.some((i: IBodyImg) => i.id === imgage.id);
          stateButton = disable;
        };
        disableButtons(img);
        return (
          <Card style={{ width: '18rem' }} key={img.id} className="mb-4">
            <Card.Img variant="top" src={srcPath} className="card-img img" />
            <Card.Body>
              {stateButton ? (
                <Form inline className="w-100 ">
                  <Button variant="warning" disabled>
                    Image saved
                  </Button>
                  <FormControl
                    type="text"
                    placeholder="Some tags?"
                    className="mt-3"
                    disabled
                    // value={inputText}
                    // onChange={changeHandle}
                    // onInput={changeTextTagImg}
                    // onKeyPress={keyPressHandler}
                    // onKeyPress={keyPressHandler}
                  />
                </Form>
              ) : (
                <Form inline className="w-100 ">
                  <Button
                    variant="dark"
                    onClick={() => {
                      getSavedСards(img);
                      addTagImage(img.id, inputText);
                    }}
                  >
                    Bookmark it!
                  </Button>
                  <FormControl
                    type="text"
                    defaultValue=""
                    placeholder="Some tags?"
                    className="mt-3"
                    onChange={enteredTag}
                    onInput={enteredTag}
                    onKeyPress={keyPressHandler}
                    // value={textTagImg}
                    // value={inputText}
                    // onChange={changeHandle}
                    // onInput={changeHandle}
                    // onKeyPress={keyPressHandler}
                  />
                </Form>
              )}
            </Card.Body>
          </Card>
        );
      })
    );
  }, [allImagesPage, savedImg, inputText]);

  if (search.length != 0 && allImagesPage.length != 0) {
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
      <Container className="p-0 ps-3 h5 mt-4">
        No images here. Try to find anything else?
      </Container>
    );
  }
  return (
    <Container className="p-0 ps-3 h5 mt-4">
      No images here. Whould you try to search for anything else?
    </Container>
  );
};

export default Found;
