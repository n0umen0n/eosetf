import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

export default class SliderExampleStep extends React.Component {
  state = { sliderValues: [1] };

  handleChange = sliderValues => {
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <div>

        <Range
          min={1}
          max={50}
          onChange={this.handleChange}
          defaultValue={sliderValues}
        />
        <div style={{"padding-top":"15px"}}>
        You are making <b>{sliderValues[0]} EosETF</b> tokens.
        <br></br>
        You need to transfer:
        <br></br>
        {sliderValues[0]*400} PEOS tokens.
        <br></br>
        {sliderValues[0]*200} LIQUIDAPP tokens.
        <br></br>
        {sliderValues[0]*1000} VIGOR tokens.
        <br></br>
        {sliderValues[0]*1000} EDNA tokens.
        <br></br>
        {sliderValues[0]*100} IQ tokens.
        </div>
      </div>
    );
  }
}
