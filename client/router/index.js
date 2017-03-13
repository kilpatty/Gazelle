import React from 'react';
import toString from './toString';
import { Promise } from 'when';
import { BrowserRouter } from 'react-router-dom';
import App from 'Components/app';
import ReactDOM from 'react-dom';


export function run() {
  // init promise polyfill
  window.Promise = window.Promise || Promise;
  // init fetch polyfill
  window.self = window;
  require('whatwg-fetch');
  
  ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), document.getElementById('app'));

}

// Export it to render on the Golang sever, keep the name sync with -
// https://github.com/olebedev/go-starter-kit/blob/master/src/app/server/react.go#L65
export const renderToString = toString;

require('../css');

// Style live reloading
if (module.hot) {
  let c = 0;
  module.hot.accept('../css', () => {
    require('../css');
    const a = document.createElement('a');
    const link = document.querySelector('link[rel="stylesheet"]');
    a.href = link.href;
    a.search = '?' + c++;
    link.href = a.href;
  });
}
