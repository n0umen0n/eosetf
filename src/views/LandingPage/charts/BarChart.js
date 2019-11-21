import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  render() {
		const data = {
  labels: ["PEOS", "LIQUIDAPP", "VIGOR", "EDNA", "IQ"],
  datasets: [
    {
			label: "Portfolio allocation ($)",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			data: [2.9148,1.785,1.76,5.9024,0.1856,0]
    }
  ]
};
    return (
<Bar data={data} />
    );
  }
}

export default BarChart;
