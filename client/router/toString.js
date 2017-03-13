import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
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
    const context = {}
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

/*match({ routes: createRoutes({store, first: { time: false }}), location: options.url }, (error, redirectLocation, renderProps) => {
      try {
        if (error) {
          result.error = error;

        } else if (redirectLocation) {
          result.redirect = redirectLocation.pathname + redirectLocation.search;

        } else {
          result.app = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          const { title, meta } = Helmet.rewind();
          result.title = title.toString();
          result.meta = meta.toString();
          result.initial = JSON.stringify(store.getState());
        }
      } catch (e) {
        result.error = e;
      }
      return cbk(result);
    });*/