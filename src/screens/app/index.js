// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet
          link={[{
            rel: 'icon', href: '/favicon.png',
          }]}
          script={[
            {"src": "/justgage.js", "type": "text/javascript"},
            {"src": "/raphael-2.1.4.min.js", "type": "text/javascript"}
          ]}
        />
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}
