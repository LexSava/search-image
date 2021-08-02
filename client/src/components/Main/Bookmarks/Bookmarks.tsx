import React, { useState, useEffect } from 'react';
import './Bookmarks.scss';
import { Container, Button, Card, Form } from 'react-bootstrap';
import Store from '../../../store/Store';
import { IBodyImg, ITagsForImages } from '../../../common/interfaces';

interface IFound {
  resultsSearch: string;
  section: string;
}

const Bookmarks: React.FC<IFound> = (props) => {
  // eslint-disable-next-line
  const [cards, setCards] = useState<any>([]);

  const [savedCards, setSavedСards] = useState<Array<IBodyImg>>([]);
  const [savedTagsForImages, setSavedTagsForImages] = useState<
    Array<ITagsForImages>
  >([]);
  const [deletCard, setDeletCard] = useState<string>('');

  const removeSavedСards = (id: string) => {
    setDeletCard(id);
    Store.removedSavedImages(id);
    Store.removedTagsForImages(id);
  };

  useEffect(() => {
    setSavedСards(Store.savedImages);
    setSavedTagsForImages(Store.tagsForImages);
  }, [deletCard]);

  useEffect(() => {
    setCards(
      savedCards.map((img: IBodyImg) => {
        const getTag = savedTagsForImages.find((item) => item.id === img.id);
        let tagImg = '___';
        if (getTag !== undefined) tagImg = getTag.tag;
        const srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
        return (
          <Card style={{ width: '18rem' }} key={img.id} className="mb-4">
            <Card.Img variant="top" src={srcPath} className="card-img img" />
            <Card.Body>
              <Card.Title>Card tag: {tagImg} </Card.Title>
              <Form inline className="w-100 ">
                <Button variant="dark" onClick={() => removeSavedСards(img.id)}>
                  Remove it!
                </Button>
              </Form>
            </Card.Body>
          </Card>
        );
      })
    );
  }, [savedCards]);

  if (savedCards.length !== 0) {
    return (
      <Container className="p-0 ps-3">
        <Container className="p-0 mt-5 d-flex flex-wrap justify-content-around">
          {cards}
        </Container>
      </Container>
    );
  }
  return (
    <Container className="p-0 ps-3 h5 mt-4">
      There are no images. There are no saved images.
    </Container>
  );
};

export default Bookmarks;
