import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { todo } from './styles';
import { example, p, link } from '../homepage/styles';

export default class Usage extends Component {

  render() {
    return <div>
      <Helmet title='Usage' />
      <h2 className={example}>Usage:</h2>
      <div className={p}>
        <span className={todo}>// TODO: write an article</span>
        <pre className={todo}>config:
          {JSON.stringify(this.props.config, null, 2)}</pre>
      </div>
      <br />
    </div>;
  }

}