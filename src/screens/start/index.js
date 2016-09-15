// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import InfoBoard from '../../components/infoboard'

import styles from './style.scss';

export default class Start extends Component {
  render() {
    return (
      <div className={ styles.main }>
        <div className="wrapper">
          <InfoBoard />
        </div>
      </div>
    );
  }
}
