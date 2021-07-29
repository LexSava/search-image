import 'bootstrap/dist/css/bootstrap.min.css';
import './Seacrh.scss';
import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';

import Store from '../../store/Store';
import Api from '../../api/flickr';

const Seacrh = () => {
  const [inputText, setInputText] = useState<string>('');
  // const [images, setImages] = useState<object>({});

  // const apiKey = 'e538ac8584601a9e9bcd4c35b2315eaa';

  // const Api = {
  //   getImages(textValue: string, page: string) {
  //     return axios
  //       .get(
  //         `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${textValue}&per_page=10&page=${page}&format=json&nojsoncallback=1`
  //       )
  //       .then((response) => {
  //         console.log(1);
  //         return response.data.photos;
  //       })
  //       .catch((error) => {
  //         console.log('Error fetching posts: ', error);
  //       });
  //   },
  // };

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    Store.getSearchQuery(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const images = Api.getImages(inputText, '4');

      Store.getImages(images.then((response) => response.data));
      // console.log(img);
      console.log(
        images.then((response) => {
          console.log(response);
          return response.data;
        })
      );

      event.preventDefault();
    }
  };

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
