import Plot from 'react-plotly.js';
import classes from './CompetitiveAnalysisGraphs.module.css';
import SentimentalGraph from '../../sentimentalCA.png'
import TweetsComparisonGraph from '../../tweetcomparisonCa.PNG'

const Graphs = (props) => {
    const recievedData = props.data.competitive_analysis;

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Graphs}>
                <h2>Competitive Analysis of Tweet Volume</h2>
                <Plot
                    className={classes.Graph}
                    data={[recievedData.file1]}
                    layout={{
                    width: 1200,
                    height: 300,
                    title: recievedData.file1.name
                }}/>
                <Plot
                    className={classes.Graph}
                    data={[recievedData.file2]}
                    layout={{
                    width: 1200,
                    height: 300,
                    title: recievedData.file2.name
                }}/>
            </div>
            <div className={classes.Graphs}>
                <h2>Sentimental Analysis</h2>
                <img className={classes.Graph} src={SentimentalGraph} style={{width: '98%'}} alt='1'/>
            </div>
            <div className={classes.Graphs}>
                <h2>Number of Tweets Comparison</h2>
                <img className={classes.Graph} src={TweetsComparisonGraph} style={{width: '60%'} } alt='1'/>
            </div>
        </div>
    );
}

export default Graphs;