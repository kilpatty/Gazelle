import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { example, p, link } from './styles';

export default class Homepage extends Component {

  render() {
    return <div>
      <Helmet
        title='Home page'
        meta={[
          {
            property: 'og:title',
            content: 'Golang Isomorphic React/Hot Reloadable/Redux/Css-Modules Starter Kit'
          }
        ]} />
      <h1 className={example}>
        Hot Reloadable <br />
        Golang + React + Redux + Css-Module test
        <br />Isomorphic Starter Kit</h1>
      <br />
      <p className={p}>
        Please checkout the <Link className={link} to='/docs'>usage</Link> page.
      </p>
    </div>;
  }

}
