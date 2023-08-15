import { useState } from 'react';
import axios from 'axios';
import CompetitiveAnalysisGraphs from './CompetitiveAnalysisGraphs';
import Loader from '../../Loader/Loader';

import classes from './CompetitiveAnalysis.module.css';

const CompetitiveAnalysis = () => {
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const [recievedData, setRecievedData] = useState();
    const [loader, setLoader] = useState(false);
    const [firstInputValue, setFirstInputValue] = useState('Upload First File');
    const [secondInputValue, setSecondInputValue] = useState('Upload Second File');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoader(true);
        let formData = new FormData();
        formData.append("file1", file1);
        formData.append("file2", file2);
        console.log(formData);
        // .post('https://ryzkfwazia.execute-api.us-east-1.amazonaws.com/prod/hashtag-analysis', formData)
        // await axios.post('https://jop6c1ixi9.execute-api.us-east-1.amazonaws.com/prod/competitive-analysis', formData)
        
        await axios.post('https://ryzkfwazia.execute-api.us-east-1.amazonaws.com/prod/competitive-analysis', formData)
            .then(response => {
                setRecievedData(response.data);
                setLoader(false);
            })
            .error(error => console.log(error.message));
    }

    const firstFileChangeHandler = (event) => {
        setFirstInputValue('Uploaded')
        const file1 = event.target.files[0];
        setFile1(file1);
        console.log(file1);
    }

    const secondFileChangeHandler = (event) => {
        setSecondInputValue('Uploaded')
        const file2 = event.target.files[0];
        setFile2(file2);
        console.log(file2);
    }

    return (
        <div>
            <h2>Competitive Analysis</h2>
            <p className={classes.Description}>Learn from your competitors by monitoring their social media activity. Analyze their content, engagement rate, and brand image to identify opportunities and improve your strategy.</p>
            <form onSubmit={onSubmitHandler} className={classes.HashtagAnalysisForm}>
                <label className={classes.FileInput} for="firstInputTag">
                    {firstInputValue}
                    <input id="firstInputTag" type="file" onChange={firstFileChangeHandler}/>
                </label>
                <label className={classes.FileInput} for="secondInputTag">
                    {secondInputValue}
                    <input id="secondInputTag" type="file" onChange={secondFileChangeHandler}/>
                </label>
                <button>Analyze</button>
            </form>
            {loader ? <Loader /> : null}
            {recievedData ? <CompetitiveAnalysisGraphs data={recievedData}/> : null}
        </div>
    );
};

export default CompetitiveAnalysis