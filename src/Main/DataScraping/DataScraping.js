import { useState } from 'react';
import { useEffect } from 'react';
import classes from './DataScraping.module.css';
import axios from 'axios';

const DataScraping = () => {
    const [downloadLink, setDownloadLink] = useState('');

    useEffect(() => {
        if (downloadLink) {
            window.open(downloadLink);
        }
    }, [downloadLink]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const filename = event.target[0].value;
        const query = event.target[1].value;
        const limit = event.target[2].value;
        const url = 'https://ryzkfwazia.execute-api.us-east-1.amazonaws.com/prod/scrape-twitter?file_name=' + filename + '.xlsx&limit=' + limit + '&query=' + query;
        const link = await axios.get(url)
            .then(response => setDownloadLink(response.data))
            .error(error => alert(error.message));
    }
    return (
        <div className={classes.DataScraping}>
            <h2>Data Scrapping</h2>
            <div className={classes.DataScraper}>
                <form className={classes.ScraperForm} onSubmit={onSubmitHandler}>
                    <h3>Hash Tag</h3>
                    <p>File Name:</p>
                    <input type='text' placeholder='For example: Output File' />
                    <p>Hash:</p>
                    <input type='text' placeholder='For example: #ILovePakistan' />
                    <p>Limit:</p>
                    <input type='text' placeholder='For example: 20' />
                    <button>Scrape</button>
                </form>
                <form className={classes.ScraperForm} onSubmit={onSubmitHandler}>
                    <h3>Profile</h3>
                    <p>File Name:</p>
                    <input type='text' placeholder='For example: Data File' />
                    <p>Profile:</p>
                    <input type='text' placeholder='For example: @SajjadAli' />
                    <p>Limit:</p>
                    <input type='text' placeholder='For example: 10' />
                    <button>Scrape</button>
                </form>
            </div>
        </div>
    );
};

export default DataScraping