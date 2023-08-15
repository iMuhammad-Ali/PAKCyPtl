import Plotly from 'plotly.js-dist-min';

const SentimentalAnalysisGraph = (props) => {
    //  For sentiment_data
    const sentimentData = props.data.sentiment_data;

    // Create traces for each user
    const traces = sentimentData.map((user_data) => {
        return {x: user_data.indices, y: user_data.sentiments, mode: "markers+lines", name: user_data.user};
    });

    // Create the scatter plot using Plotly.js
    const layout2 = {
        title: "Sentiment Analysis for Users",
        xaxis: { title: "Tweets" },
        yaxis: { title: "Sentiment Polarity" },
        width: 1180,
        height: 600
    };

    Plotly.newPlot("sentiment-analysis-plot", traces, layout2);

}

export default SentimentalAnalysisGraph;