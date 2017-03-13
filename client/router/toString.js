import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';
import App from 'Components/app';

/**
 * Handle HTTP request at Golang server
 *
 * @param   {Object}   options  request options
 * @param   {Function} cbk      response callback
 */
export default function (options, cbk) {
  cbk = global[cbk];
  let result = {
    uuid: options.uuid,
    app: null,
    title: null,
    meta: null,
    initial: null,
    error: null,
    redirect: null
  };

  try {
    const context = {};
    result.app = renderToString(
       <StaticRouter
          location={options.url}
          context={context}
        >
          <App/>
        </StaticRouter>
    );

    if (context.url) {
      result.redirect = context.url;
    }

    const { title, meta } = Helmet.rewind();
    result.title = title.toString();
    result.meta = meta.toString();

  } catch (e) {
    result.error = e;
    return cbk(result);
  }
  return cbk(result);
}