import Plotly from 'plotly.js-dist-min';

const HeatmapGraph = (props) => {
    console.log(props.data)
    const zNewValues = Object.values(props.data)
    const yNewValues = Object.keys(props.data)
    const xNewValues = Array.from({ length: zNewValues[0].length + 1 }, (_, i) => i.toString())
    const data = [
      {
        z: zNewValues,
        y: yNewValues,
        x: xNewValues,
        type: 'heatmap',
        colorscale: "Reds"
      }
    ];
    
     const layout = {
        title: "Engagement by Time of Day",
        yaxis: { title: "Hour of Day" },
        xaxis: { title: "Engagement Type" },
        width: 1180,
        height: 600,
      };
    
    Plotly.newPlot('heatmap', data, layout);
    }

export default HeatmapGraph;