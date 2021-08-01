import { makeAutoObservable, autorun, set, toJS } from 'mobx';
import _ from 'lodash';
import { IBodyImg } from '../common/interfaces';

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
}
// window.localStorage.clear();
class Store {
  search: string = '';

  page: string = '1';

  pageWithImages: Array<IBodyImg> = [];

  savedImages: Array<IBodyImg> = [];

  public accessToken: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.accessToken = '';
    autoSave(this, 'authStore');
  }

  getSearchQuery(enteredSearch: string) {
    this.search = enteredSearch;
  }

  getpageWithImages(arr: Array<IBodyImg>) {
    this.pageWithImages = arr;
  }

  getSavedImages(arr: IBodyImg) {
    this.savedImages = _.uniqWith(this.savedImages.concat(arr), _.isEqual);
    // console.log(this.savedImages);
  }

  removedSavedImages(id: string) {
    this.savedImages = _.remove(this.savedImages, (item) => item.id != id);
    // console.log(this.savedImages);
  }
}

export default new Store();
