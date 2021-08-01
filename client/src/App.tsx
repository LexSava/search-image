import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
// import Page from './components/Page/Page';
import './App.scss';

const LoadableComponent = Loadable({
  loader: () => import('./components/Page/Page'),
  loading: LoadingScreen,
  delay: 300,
});

function App() {
  // return <Page />;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoadableComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
