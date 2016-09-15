import Highcharts from 'highcharts';
import React, { Component }  from 'react';

export default class Chart extends Component {
  componentDidMount() {
    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function(module) {
        module(Highcharts);
      });
    }
    // Set container which the chart should render to.
    this.chart = new Highcharts.Chart({
      title: 'Hello',
      colors: ['#80FFFF', '#40FFC0'],
      chart: {
        renderTo: 'charty',
        borderWidth: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        },
      },
      xAxis: { type: 'datetime' },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Temp',
        data: this.props.init[0]
      }, {
        name: 'Volt',
        data: this.props.init[1]
      }]
    });
  }
  componentWillUnmount() {
    this.chart.destroy();
  };
  
  render() {
    if (this.chart) {
      const {temp, timestamp} = this.props.latest;
      this.chart.series[0].addPoint([timestamp, temp]);
    }
    return (
      <div id='charty' className='charty' />
    );
  }
}
