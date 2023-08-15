import {useState} from 'react';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import classes from './HashtagAnalysis.module.css';
import TweetsGraph from './TweetsGraph';
import SentimentalAnalysisGraph from './SentimentalAnalysisGraph';
import HeatmapGraph from './HeatmapGraph';
import TweetsPerHour from './TweetsPerHour';
import LanguagesPieChart from './LanguagesPieChart';
import LineGraph from './LineGraph';
import TweetSource from './TweetSource';
import WordCloud from '../../WordCloud.png';
import BarChart from '../../BarChart.png';
import LineGraph2 from '../../linegraph2.png'
import UEM from '../../UEm12.png'
import CM from '../../Cm13.png'
import HashCloud from '../../hashMention.png'

const HashtagAnalysis = () => {
    const [inputValue, setInputValue] = useState('Upload the File');
    const [file, setFile] = useState();
    const [recievedData, setRecievedData] = useState();
    const [heatmapRecievedData, setHeatmapRecievedData] = useState();
    const [TweetPerHourRecievedData, setTweetPerHourRecievedData] = useState();
    const [LanguagesPieChartRecievedData, setLanguagesPieChartRecievedData] = useState();
    const [LineGraphRecievedData, setLineGraphRecievedData] = useState();
    const [TweetSourceRecievedData, setTweetSourceRecievedData] = useState();
    const [loader, setLoader] = useState(false);
            // .post('https://jop6c1ixi9.execute-api.us-east-1.amazonaws.com/prod/hashtag-analysis', formData)
    const TweetAndSentimentalApi = async(formData) => {
        await axios
            .post('https://ryzkfwazia.execute-api.us-east-1.amazonaws.com/prod/hashtag-analysis', formData)
            .then(response => {
                setRecievedData(response.data)
                setLoader(false);
            })
            .error(error => console.log(error.message));
    }
    const TweetSourceApi = async(formData) => {
        await axios
        .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test/source-of-tweets', formData)
        .then(response => {
                setTweetSourceRecievedData(response.data)
                setLoader(false);
        })
        .error(error => console.log(error.message));
    }
    const LineGraphApi = async(formData) => {
        await axios
            .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test/linegraph-horizontal', formData)
            .then(response => {
                setLineGraphRecievedData(response.data)
                setLoader(false);
        })
        .error(error => console.log(error.message));
    }
    const PieChartApi = async(formData) => {
        await axios
            .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test/pie-chart', formData)
            .then(response => {
                setLanguagesPieChartRecievedData(response.data)
                setLoader(false);
        })
        .error(error => console.log(error.message));
    }
    // .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test/tweets-per-hour', formData)
    const TweetsPerHourApi = async(formData) => {
        await axios
            .post('https://ryzkfwazia.execute-api.us-east-1.amazonaws.com/prod/tweets-per-hour', formData)
            .then(response => {
                setTweetPerHourRecievedData(response.data)
                setLoader(false);    
        })
        .error(error => console.log(error.message));
    }
    const HeatmapApi = async(formData) => {
        await axios
            .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test', formData)
            .then(response => {
                console.log(response.data)
                console.log("Heatmap Api response")
                setHeatmapRecievedData(response.data)
                setLoader(false);
        })
        .error(error => console.log(error.message));
    }
    const WordCloudApi = async(formData) => {
        const response = await axios({
            method: "post",
            url: "http://10.90.22.568000/hashtag-wordcloud/",
            data: formData,
            responseType: "blob"
        });
        console.log(response);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setLoader(true);
        let formData = new FormData();
        formData.append("file", file);
        TweetAndSentimentalApi(formData);
        TweetSourceApi(formData);
        LineGraphApi(formData);
        PieChartApi(formData);
        TweetsPerHourApi(formData);
        // WordCloudApi(formData);
        // HeatmapApi(formData)
    }

    const fileChangeHandler = (event) => {
        setInputValue('File Uploaded');
        const file = event.target.files[0];
        setFile(file);
        console.log(file);
    }

    return (
        <div>
            <h2>Hashtag Analysis</h2>
            <p className={classes.Description}>Discover the power of hashtag research! Track
                relevant hashtags to uncover valuable insights about your company's social media
                performance, customer opinions, and competitors. Law enforcement can also use
                hashtag monitoring to stay informed about illegal activities and public safety
                issues. Start exploring now!</p>
            <form onSubmit={onSubmitHandler} className={classes.HashtagAnalysisForm}>
                <label className={classes.FileInput} for="inputTag">
                    {inputValue}
                    <input id="inputTag" type="file" onChange={fileChangeHandler}/>
                </label>
                <button>Analyze</button>
            </form>
            {loader ? <Loader/> : null}
            <div className={classes.MainContainer}>
                <div className={recievedData ? classes.Graphs: ""}>
                    { recievedData ? <h2>Number of Tweets by User</h2> : null }
                    <div className={classes.Graph} id='user-tweet-counts-plot'>
                        {recievedData ? <TweetsGraph data={recievedData}/> : null}
                    </div>
                </div>
                <div className={recievedData ? classes.Graphs: ""}>
                { recievedData ? <h2>User Sentimental Analysis</h2> : null }
                    <div className={classes.Graph} id='sentiment-analysis-plot'>
                        {recievedData ? <SentimentalAnalysisGraph data={recievedData}/> : null}
                    </div>
                </div>
                <div className={heatmapRecievedData ? classes.Graphs: ""}>
                { heatmapRecievedData ? <h2>Heatmap of retweets, likes and replies</h2> : null }
                    <div className={classes.Graph} id='heatmap'>
                        {heatmapRecievedData ? <HeatmapGraph data={heatmapRecievedData}/> : null}
                    </div>
                </div>
                <div className={TweetPerHourRecievedData ? classes.Graphs: ""}>
                { TweetPerHourRecievedData ? <h2>Heatmap of tweets per hour</h2> : null }
                    <div className={classes.Graph} id='tweets-per-hour'>
                        {TweetPerHourRecievedData ? <TweetsPerHour data={TweetPerHourRecievedData}/> : null}
                    </div>
                </div>
                <div className={LanguagesPieChartRecievedData ? classes.Graphs: ""}>
                { LanguagesPieChartRecievedData ? <h2>Pie chart of Languages</h2> : null }
                    <div className={classes.Graph} id='Languages-pie-chart'>
                        {LanguagesPieChartRecievedData ? <LanguagesPieChart data={LanguagesPieChartRecievedData}/> : null}
                    </div>
                </div>
                <div className={LineGraphRecievedData ? classes.Graphs: ""}>
                { LineGraphRecievedData ? <h2>Horizontal Linegraph</h2> : null }
                    <div className={classes.Graph} id='linegraph'>
                        {LineGraphRecievedData ? <LineGraph data={LineGraphRecievedData}/> : null}
                    </div>
                </div>
                <div className={TweetSourceRecievedData ? classes.Graphs: ""}>
                { TweetSourceRecievedData ? <h2>Tweet Source</h2> : null }
                    <div className={classes.Graph} id='tweet-source'>
                        {TweetSourceRecievedData ? <TweetSource data={TweetSourceRecievedData}/> : null}
                    </div>
                </div>
                
                {LineGraphRecievedData 
                    ? <div className={classes.Graphs}>
                            <h2>Mention Word Cloud</h2>
                            <img className={classes.Graph}  src={WordCloud} alt='3'/>
                        </div>
                    : null}
                
                {LineGraphRecievedData
                    ? <div className={classes.Graphs}>
                            <h2>Text tweets, tweets with links and replies</h2>
                            <img className={classes.Graph}  src={BarChart} alt='5'/>
                        </div>
                    : null}

                {LineGraphRecievedData
                    ? <div className={classes.Graphs}>
                            <h2>Twitter engagement over time</h2>
                            <img className={classes.Graph} src={LineGraph2} alt='8'/>
                        </div>
                    : null}
                
                {LineGraphRecievedData
                    ? <div className={classes.Graphs}>
                            <h2>User Engagement Matrix</h2>
                            <img className={classes.Graph} src={UEM} alt='9'/>
                        </div>
                    : null}

                {LineGraphRecievedData
                    ? <div className={classes.Graphs}>
                            <h2>Coordinate Map</h2>
                            <img className={classes.Graph} src={CM} alt='9'/>
                        </div>
                    : null}
                {LineGraphRecievedData
                    ? <div className={classes.Graphs}>
                            <h2>Hashtag WordCloud</h2>
                            <img className={classes.Graph} src={HashCloud} alt='10'/>
                        </div>
                    : null}

            </div>
        </div>
    );
};

export default HashtagAnalysis