import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { notFound } from './styles';

export default class NotFound extends Component {

  render() {
    return <div>
      <Helmet title='404 Page Not Found' />
      <h2 className={notFound}>
      404 Page Not Found</h2>
    </div>;
  }

}
