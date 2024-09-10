import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Auth from './pages/Auth';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element = {
                <>
                  <HomePage />
                </>
              }
            />
            <Route
              path='/auth'
              element = {
                <>
                  <Auth />
                </>
              }
            />
            <Route
              path='/about-us'
              element = {
                <>
                  <AboutUs />
                </>
              }
            />
            <Route
              path='/contact-us'
              element = {
                <>
                  <Contact />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App