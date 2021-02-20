import React from 'react';
import Home from './components/home';
import {Provider} from 'react-redux';
import store from './store/';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <Provider store={store}>
        <Home/>
        <AboutUs></AboutUs>
      </Provider>
    </>
  );
}

export default App;
