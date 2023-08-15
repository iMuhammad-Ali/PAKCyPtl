import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LanguagesPieChart = (props) => {
    console.log("LanguagesPieChart Data: ")
    console.log(props.data)
    
const labels = props.data['x']
const values = props.data['y']

var traceA = {
  type: "pie",
  values,
  labels,
};

var data = [traceA];

var layout = {
  title: "Languages Pie Chart",
  width: 1180,
 height: 600
};

Plotly.newPlot('Languages-pie-chart', data, layout);
    }

export default LanguagesPieChart;