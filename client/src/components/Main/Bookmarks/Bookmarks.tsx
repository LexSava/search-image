import React, { useState, useEffect } from 'react';
import './Bookmarks.scss';
import { Container, Button, Card, Form } from 'react-bootstrap';
import Store from '../../../store/Store';
import { IBodyImg } from '../../../common/interfaces';

interface IFound {
  resultsSearch: string;
  section: string;
}

const Bookmarks: React.FC<IFound> = (props) => {
  // eslint-disable-next-line
  const [cards, setCards] = useState<any>([]);

  const [savedCards, setSavedСards] = useState<Array<IBodyImg>>([]);
  const [deletCard, setDeletCard] = useState<string>('');

  const removeSavedСards = (id: string) => {
    setDeletCard(id);
    Store.removedSavedImages(id);
  };

  useEffect(() => {
    setSavedСards(Store.savedImages);
  }, [Store.savedImages, deletCard]);

  useEffect(() => {
    setCards(
      savedCards.map((img: IBodyImg) => {
        const srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
        return (
          <Card style={{ width: '18rem' }} key={img.id} className="mb-4">
            <Card.Img variant="top" src={srcPath} className="card-img img" />
            <Card.Body>
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

  if (savedCards.length != 0) {
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
