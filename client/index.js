import App from 'Components/app';

const router = require('./router');


// export main function for server side rendering
global.main = router.renderToString;

// start app if it in the browser
if(typeof window !== 'undefined') {
  console.log('Run router test');
  // Start main application here
  router.run();
}


// Hot Module Reloading for React
if (module.hot) {
  module.hot.accept(function (err) {
    console.log('got here');
    if (err) {
      console.error('Cannot not apply hot update to ' + ' + JSON.stringify(filename) + ' + ': ' + err.message);
    }
  });
}

