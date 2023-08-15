import Plotly from 'plotly.js-dist-min';

const TweetsGraph = (props) => {
    const tweetCountData = props.data.user_tweet_counts;

    const trace = {
        x: tweetCountData.map((d) => d.count),
        y: tweetCountData.map((d) => d.User),
        mode: "markers",
        text: tweetCountData.map((d) => d.User),
        marker: {
            size: tweetCountData.map((d) => d.count),
            color: tweetCountData.map((d) => d.count),
            colorscale: "Viridis",
            showscale: true
        }
    };

    const layout = {
        title: "Number of Tweets by User",
        xaxis: {
            title: "Number of Tweets"
        },
        yaxis: {
            title: "User"
        },
        width: 1164,
        height: 600
    };

    Plotly.newPlot("user-tweet-counts-plot", [trace], layout);

}

export default TweetsGraph;