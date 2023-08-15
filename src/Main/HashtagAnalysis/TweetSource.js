import Plotly from 'plotly.js-dist-min';

const TweetSource = (props) => {
    console.log("TweetSource data")
    console.log(props.data)
    const values = props.data["tweet"]
const labels = props.data["source"]

const data = [{
  type: "pie",
  values,
  labels
}];

const layout = {
  title: "Tweet Source",
  width: 1180,
  height: 600,
};

Plotly.newPlot("tweet-source", data, layout);
    }

export default TweetSource;