import axios from 'axios';

const apiKey = 'e538ac8584601a9e9bcd4c35b2315eaa';

export const Api = {
  getImages(textValue: string, page: string) {
    return axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${textValue}&per_page=10&page=${page}&format=json&nojsoncallback=1`
      )
      .then((response) => response.data.photos)
      .catch((error) => {
        process.stdout.write('Error fetching posts: ', error);
      });
  },
};

export default Api;
