import React from 'react';
import toString from './toString';
import { BrowserRouter } from 'react-router-dom';
import App from 'Components/app';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

export const render = Component => {
  ReactDOM.render(
    
      <AppContainer>
        <BrowserRouter>
        <Component/>
        </BrowserRouter>
      </AppContainer>
    ,
    document.getElementById('app')
  );
};

export function run() {
  // init fetch polyfill
  window.self = window;
  require('whatwg-fetch');

  render(App);
  
}

// Export it to render on the Golang sever, keep the name sync with -
// https://github.com/olebedev/go-starter-kit/blob/master/src/app/server/react.go#L65
export const renderToString = toString;