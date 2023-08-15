import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TweetsPerHour = (props) => {
    console.log("Tweets Per Hour Data: ")
    console.log(props.data)
  const zValues =  [Object.values(props.data)]
  const xValues = Object.keys(props.data)
  const data = [
        {
          z: zValues,
          y: [''],
          x: xValues,
          type: 'heatmap',
          colorscale: 'Reds'
        }
      ];
  
      const layout = {
        title: 'Tweets per Hour',
        xaxis: { title: 'Hour' },
        yaxis: { title: '' },
        width: 1180,
        height: 600
      };
        Plotly.newPlot('tweets-per-hour', data, layout);
    }

export default TweetsPerHour;