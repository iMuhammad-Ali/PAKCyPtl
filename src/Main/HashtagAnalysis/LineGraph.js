import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LineGraph = (props) => {
    console.log("LineGraph Data: ")
    console.log(props.data)
    const x = props.data["Date"];
    const y = props.data["count"];
    
    const trace = {
      x: x,
      y: y,
      type: "bar",
    };
    
    const data = [trace];
    
    const layout = {
      title: "Number of tweets per unit time",
      width: 1180,
      height: 600,
      xaxis: {
        title: "Date and Time",
        rangeselector: {
          buttons: [
            {
              count: 1,
              label: "1d",
              step: "day",
              stepmode: "backward"
            },
            {
              count: 7,
              label: "1w",
              step: "day",
              stepmode: "backward"
            },
            {
              count: 1,
              label: "1m",
              step: "month",
              stepmode: "backward"
            },
            {
              count: 6,
              label: "6m",
              step: "month",
              stepmode: "backward"
            },
            { step: "all" }
          ]
        },
        rangeslider: {
          visible: true
        },
        type: "date"
      },
      yaxis: {
        title: "Number of Tweets"
      }
    };
    
    Plotly.newPlot("linegraph", data, layout);

}

export default LineGraph;