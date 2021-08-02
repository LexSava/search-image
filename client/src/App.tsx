import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.scss';

const LoadableComponent = Loadable({
  loader: () => import('./components/Page/Page'),
  loading: LoadingScreen,
  delay: 300,
});

interface IApp {}

const App: React.FC<IApp> = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoadableComponent} />
    </Switch>
  </BrowserRouter>
);
export default App;
