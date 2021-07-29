import { makeAutoObservable, autorun, set, toJS } from 'mobx';

// eslint-disable-next-line
export function autoSave(_this: any, name: string) {
  const storedJson = localStorage.getItem(name);
  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }
  autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
  // window.localStorage.clear();
}

class Store {
  search: string = '';

  page: string = '1';

  pageWithImages: object = {};

  public accessToken: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.accessToken = ''; // initial value setup must be placed here before update by autoSave
    autoSave(this, 'authStore');
  }

  getSearchQuery(enteredSearch: string) {
    this.search = enteredSearch;
    // console.log(this.search);
  }

  getImages(images: object) {
    this.pageWithImages = images;
    // console.log(this.pageWithImages);
  }
}

export default new Store();
