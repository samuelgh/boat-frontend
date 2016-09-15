// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from './style.scss';

export default class About extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className="header">
          <h1>About</h1>
          <h2>solar panel battery charger</h2>
        </div>
        <div className="wrapper">
          <h4>WHAT</h4>
          <p>
          </p>
          <p>
            Visualizes the battery and temperature status on a boat reported over 3G cellular arduino compatible linkit to data.sparkfun.com. Project mostly dedicated on how to achieve sensor reporting where there's no wifi nearby. 
            <br/>
          </p>
          <h4>HOW</h4>
          <br/>
          - Uses <a href="http://www.getroc.org/">roc js</a> (react/redux + a ton of other js libs) for frontend <br/>
          <br/>
          - Temperature and voltage input from <a href="https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html">Linkit Smart 7688 Duo</a>
          <br/>
          <br/>
          - 3G Cellular network provided by a Huawei E3351

          <h4>CODE</h4>
          <br/>
          <p>
            Frontend: Link <br/>
            Backend: Link
          </p>
        </div>
      </div>
    );
  }
}
