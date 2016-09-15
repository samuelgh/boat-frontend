import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startRecurring } from '../../actions/data-fetcher';

import styles from './style.scss';

export default class Gauge extends React.Component {
  render() {
    if (this.gauge) {
      this.gauge.refresh(this.props.value);
    }
    return (
      <div className={styles.main}>
        <div id={this.props.id}></div>
      </div>
    );
  }
  componentDidMount() {
    this.gauge = new JustGage({
      id: this.props.id,
      value: this.props.value,
      symbol: this.props.symbol,
      decimals: true,
      min: this.props.min,
      max: this.props.max,
      title: "",
      relativeGaugeSize: true,
      gaugeWidthScale: 0.3,
      // titleFontFamily: 'Helvetica Neue',
      // titleFontColor: '#5E5E5E',
      // valueFontFamily: 'Helvetica Neue',
      valueFontWeight: 100,
      gaugeColor: this.props.gaugecolor,
      valueFontColor: this.props.gaugecolor,
      label: '',
      levelColors: [this.props.color],
      levelColorsGradient: false,
    });
  }
}
