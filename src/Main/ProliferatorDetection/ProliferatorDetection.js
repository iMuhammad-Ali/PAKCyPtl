import {useState} from 'react';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import classes from './ProliferatorDetection.module.css';

const ProliferatorDetection = () => {
    const [inputValue, setInputValue] = useState('Upload the File');
    const [file, setFile] = useState();
    const [loader, setLoader] = useState(false);
    const [recievedData, setRecievedData] = useState();
    const [suspectedRecievedData, setSuspectedRecievedData] = useState();
    
    const ProliferatorDetectionApi = async(formData) => {
        await axios
            .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test/proliferator-detection?input=10', formData)
            .then(response => {
                setRecievedData(response.data)
                setLoader(false);
            })
            .error(error => console.log(error.message));
    }

    const SuspectedProliferatorDetectionApi = async(formData) => {
        await axios
            .post('https://0tzd0mv93i.execute-api.eu-central-1.amazonaws.com/test/suspected-proliferator-detection-using-likes-retweets-replies-paremeters?num_top_proliferators=5&likes=0.4&replies=0.2&retweets=0.4', formData)
            .then(response => {
                console.log(response.data.Hashtags)
                // setSuspectedRecievedData(response.data.Hashtags)
                const result = Object.entries(response.data.Hashtags);
                console.log(result)
                setSuspectedRecievedData(result)
                setLoader(false);
        })
        .error(error => console.log(error.message));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setLoader(true);
        let formData = new FormData();
        formData.append("file", file);
        SuspectedProliferatorDetectionApi(formData);   
        ProliferatorDetectionApi(formData);
    }

    const fileChangeHandler = (event) => {
        setInputValue('File Uploaded');
        const file = event.target.files[0];
        setFile(file);
        console.log(file);
    }

    return (
        <div>
            <h2>Proliferator Detection</h2>
            <p className={classes.Description}>Our cutting-edge data analysis solution utilizes an Excel file to assess the proliferation of specific hashtags across various social media platforms. By leveraging key metrics such as likes, retweets, replies, and follower counts, we provide clients with valuable insights into the engagement and reach of their hashtags.</p>
            <form onSubmit={onSubmitHandler} className={classes.HashtagAnalysisForm}>
                <label className={classes.FileInput} for="inputTag">
                    {inputValue}
                    <input id="inputTag" type="file" onChange={fileChangeHandler}/>
                </label>
                <button>Analyze</button>
            </form>
            {loader ? <Loader/> : null}
            
            {suspectedRecievedData ? <h2 className={classes.ProliferatorHeader}>Top 5 Proliferator:</h2> : null }
            {suspectedRecievedData ? <div className={classes.UsersBody}>
                <h4>User Name</h4>
                <h4>Number of Tweets</h4>
                {suspectedRecievedData.map((data) => { return (
                    <div>
                        <div className={classes.Users}>
                            <p><a href={"https://twitter.com/"+data[0]} target="_blank">@{data[0]}</a></p>
                        </div> 
                        <div className={classes.Hashtags}>
                            <p>{data[1]}</p>
                        </div> 
                    </div> 
                )})}
            </div> : null}

            {recievedData ? <h2 className={classes.ProliferatorHeader}>Suspected Proliferator:</h2> : null }
            {recievedData ? 
                <div className={classes.TweetsBody}>
                {recievedData.map((tweet) => {
                    return ( <div className={classes.Tweet}>
                                <div className={classes.Title}>
                                    <p><b>User Name:</b></p>
                                    <p><b>Time:</b></p>
                                    <p><b>Row Number:</b></p>
                                    <p><b>Content:</b></p>
                                </div>
                                <div className={classes.Values}>
                                    <p>{tweet["User Name"]}</p>
                                    <p>{tweet["Date"]}</p>
                                    <p>{tweet["Row Number"]}</p>
                                    <p className={classes.Content}>{tweet["Tweet Content"]}</p>
                                </div>
                            </div>
                    )
                })}
                </div> : null}
        </div>
    );
};

export default ProliferatorDetection