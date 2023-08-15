import { useState } from "react";
import classes from './ProfileAnalysis.module.css';

const ProfileAnalysis = () => {
    const [inputValue, setInputValue] = useState('Upload the File');
    const onSubmitHandler = async (event) => {
        event.preventDefault();        
    }

    const fileChangeHandler = () => {
            setInputValue('File Uploaded')
    }

    return (
        <div>
            <h2>Profile Analysis</h2>
            <form onSubmit={onSubmitHandler} className={classes.HashtagAnalysisForm}>
                <label className={classes.FileInput} for="inputTag">
                    {inputValue}
                    <input id="inputTag" type="file" onChange={fileChangeHandler}/>
                </label>
                <button>Analyze</button>
            </form>
        </div>
    );
};

export default ProfileAnalysis