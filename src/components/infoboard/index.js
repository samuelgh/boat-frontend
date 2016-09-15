import React, { Component }  from 'react';
import Gauge from '../gauge';
import Chart from '../chart';
import { startInit } from '../../actions/data-fetcher';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startInit }, dispatch);
}

function mapStateToProps(state) {
  return {
    sensorData: state.sensorData,
    initData: state.initData,
  };
}


function hasInitData(initData, sensorData) {
  if(!initData.nodata) {
    return (<div className="diagram">
      <Chart init={initData} latest={sensorData} />
    </div>
    )
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class InfoBoard extends Component {
  render() {
    console.log('render called' + JSON.stringify(this.props.sensorData));
    return (
      <div className="wrapper">
        <div id='one' className="doodle">
        <Gauge id='one' value={this.props.sensorData.temp} symbol=' °C' min='-25' max='45' color='#80FFFF' gaugecolor='#edebeb' />
          </div>
        <div id='two' className="doodle">
          <Gauge id='two' value={this.props.sensorData.volt} symbol=' V' min='0' max='18' color='#40FFC0' gaugecolor='#edebeb' />
         </div>
        {hasInitData(this.props.initData,this.props.sensorData)}
      </div>
    );
  }
  componentDidMount() {
    this.props.startInit();
  }
}
