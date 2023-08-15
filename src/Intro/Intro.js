import classes from './Intro.module.css';
import BackgroundVideo from '../video.mp4';
import Header from '../Header/Header';

import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();
    const PageToggler = (Name) => {
        navigate('/Main/' + Name);
    }

    return (
        <div>
            <video className={classes.Background} autoPlay loop muted>
                <source src={BackgroundVideo} type='video/mp4' />
            </video>
            <div className={classes.Body}>
                <Header />
                <ul>
                    <li onClick={() => PageToggler('DataScraping')}>
                        <h2>Scraper</h2>
                        <h4>Scrape data about any specific hashtag, any profile or any specific keyword from your specified timeline.</h4>
                    </li>
                    <li onClick={() => PageToggler('CompetitiveAnalysis')}>
                        <h2>Analysis</h2>
                        <h4>Based on scaraped data do different analysis on that data to get full insights of data, Hashtag, Profile, and Competitive Analysis</h4>
                    </li>
                    <li>
                        <a href='https://osintframework.com/'>
                            <h2>OSINT Tools</h2>
                            <h4><a href='https://osintframework.com/'>Embedded different OSINT tools for Network mapping, Trackback operation to get deeper information.</a></h4>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Intro;
