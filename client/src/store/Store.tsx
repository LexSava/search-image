import { makeAutoObservable, observable, action } from 'mobx';
import { create, persist } from 'mobx-persist';
import localForage from 'localforage';

class Store {
  @persist @observable search: string = '';

  @persist @observable counter: number = 0;

  // name: string = "";
  // surname: string = "";
  // displayModalWindow: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getSearchQuery(enteredSearch: string) {
    this.search = enteredSearch;
    console.log(this.search);
  }

  @action
  getCounter() {
    this.counter += 1;
    console.log(this.counter);
  }

  // getSurname(enteredSurname: string) {
  //   this.surname = enteredSurname;
  // }
  // openModalWindow() {
  //   if (this.surname.length !== 0 && this.name.length !== 0) {
  //     this.displayModalWindow = true;
  //   }
  // }
  // closeModalWindow() {
  //   this.displayModalWindow = false;
  // }
}

const hydrate = create({
  storage: localForage, // or AsyncStorage in react-native.
  // default: localStorage
  jsonify: false, // if you use AsyncStorage, here shoud be true
  // default: true
});

export const someStore = new Store();
hydrate('some', someStore)
  // post hydration
  .then(() => console.log(someStore));

export default new Store();
