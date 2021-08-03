import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
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
  <HashRouter>
    <Route path="/" exact component={LoadableComponent} />
  </HashRouter>
);
export default App;
