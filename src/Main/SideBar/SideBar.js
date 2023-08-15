import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import classes from "./SideBar.module.css";
// Imported Logos
import PAKCyPtlLogo from '../../PAKCyPtl-Logo.jpeg';
import DataScrapingIcon from '../../Icons/Data Scraping.png';
import HashtagAnalysisIcon from '../../Icons/Hashtag analysis.png';
import CompetitiveAnalysisIcon from '../../Icons/Competitive Analysis.png';
import ProliferatorDetectionIcon from '../../Icons/Proliferator Detection.png';
import TrackBackIcon from '../../Icons/Track Back.png';
import ProfileAnalysisIcon from '../../Icons/Profile Analysis.png';
import NetworkMappingIcon from '../../Icons/Network Mapping.png';
import FollowerAnalysisIcon from '../../Icons/Follower Analysis.png';
import SIMsDatabaseIcon from '../../Icons/SIMs database.png';
import UserAnalysisIcon from '../../Icons/User Analytics.png';
import OSINTFrameworkIcon from '../../Icons/OSINT framework.png';

const SideBar = (props) => {
    const [activeItem, setActiveItem] = useState('');
    const navigate = useNavigate();

    const PageToggler = (Name) => {
        setActiveItem(Name)
        navigate('/Main/' + Name);
    }

    const setLoader = () => {
        props.setLoading(true);
        setTimeout(() => { props.setLoading(false) }
            , 100000);
    }

    let sideDrawer = null;
    if (props.sideDrawerToggler) {
        sideDrawer = (
            <div className={classes.SideBar}>
                <div className={classes.SideDrawerHeader}>
                    <div className={classes.Logo}>
                        <img src={PAKCyPtlLogo} alt="PAKCyPtl-Logo" />
                        <h2>PAKCyPtl</h2>
                    </div>
                    <div onClick={props.DrawerToggler} className={classes.DrawerToggler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <nav className={classes.Menu}>
                    <ul>
                        <li className={activeItem === 'DataScraping' ? classes.active : ''} onClick={() => PageToggler('DataScraping')}>
                            <img src={DataScrapingIcon} alt="DataScrapingIcon" />
                            Data Scraping
                        </li>
                        <li className={activeItem === 'HashtagAnalysis' ? classes.active : ''} onClick={() => PageToggler('HashtagAnalysis')}>
                            <img src={HashtagAnalysisIcon} alt="HashtagAnalysisIcon" />
                            Hashtag Analysis
                        </li>
                        <li className={activeItem === 'CompetitiveAnalysis' ? classes.active : ''} onClick={() => PageToggler('CompetitiveAnalysis')}>
                            <img src={CompetitiveAnalysisIcon} alt="CompetitiveAnalysisIcon" />
                            Competitive Analysis
                        </li>
                        <li className={activeItem === 'ProliferatorDetection' ? classes.active : ''} onClick={() => PageToggler('ProliferatorDetection')}>
                            <img src={ProliferatorDetectionIcon} alt="ProliferatorDetectionIcon" />
                            Proliferator Detection
                        </li>
                        <li className={activeItem === 'TrackBack' ? classes.active : ''} onClick={() => { PageToggler('TrackBack'); setLoader() }}>
                            <img src={TrackBackIcon} alt="TrackBackIcon" />
                            <a href="https://www.talkwalker.com/">Track Back</a>
                        </li>
                        <li className={activeItem === 'ProfileAnalysis' ? classes.active : ''} onClick={() => PageToggler('ProfileAnalysis')}>
                            <img src={ProfileAnalysisIcon} alt="ProfileAnalysisIcon" />
                            <a href="https://dash.tweetbinder.com/report/free">Profile Analysis</a>

                        </li>
                        <li className={activeItem === 'FollowerAnalysis' ? classes.active : ''} onClick={() => { PageToggler('FollowerAnalysis'); setLoader() }}>
                            <img src={FollowerAnalysisIcon} alt="FollowerAnalysisIcon" />
                            <a href="https://app.truthnest.com/">Followers Analysis</a>
                        </li>
                        <li className={activeItem === 'SIMsDatabase' ? classes.active : ''} onClick={() => { PageToggler('SIMsDatabase'); setLoader() }}>
                            <img src={SIMsDatabaseIcon} alt="SIMsDatabaseIcon" />
                            <a href="https://subinfo.deadcom.live/Identity/Account/Login?ReturnUrl=%2F">SIMs Database</a>
                        </li>
                        <li className={activeItem === 'UserAnalysis' ? classes.active : ''} onClick={() => { PageToggler('UserAnalysis'); setLoader() }}>
                            <img src={UserAnalysisIcon} alt="UserAnalysisIcon" />
                            <a href="https://www.twitonomy.com/dashboard.php">User Analysis</a>
                        </li>
                        <li className={activeItem === 'NetworkMapping' ? classes.active : ''} onClick={() => { PageToggler('NetworkMapping'); setLoader() }}>
                            <img src={NetworkMappingIcon} alt="NetworkMappingIcon" />
                            <a href="https://hoaxy.osome.iu.edu/error">Network Mapping</a>
                        </li>
                        <li className={activeItem === 'OSINTFramework' ? classes.active : ''} onClick={() => { PageToggler('OSINTFramework'); setLoader() }}>
                            <img src={OSINTFrameworkIcon} alt="OSINTFrameworkIcon" />
                            <a href='https://osintframework.com/'>OSINT Framework</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    } else {
        sideDrawer = (
            <div className={classes.SideBarToggled}>
                <div className={classes.SideDrawerHeaderToggled}>
                    <div onClick={props.DrawerToggler} className={classes.DrawerToggler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <nav className={classes.MenuToggled}>
                    <ul>
                        <li className={activeItem === 'DataScraping' ? classes.ToggledActive : ''} onClick={() => PageToggler('DataScraping')}><img src={DataScrapingIcon} alt="DataScrapingIcon" /></li>
                        <li className={activeItem === 'HashtagAnalysis' ? classes.ToggledActive : ''} onClick={() => PageToggler('HashtagAnalysis')}><img src={HashtagAnalysisIcon} alt="HashtagAnalysisIcon" /></li>
                        <li className={activeItem === 'CompetitiveAnalysis' ? classes.ToggledActive : ''} onClick={() => PageToggler('CompetitiveAnalysis')}><img src={CompetitiveAnalysisIcon} alt="CompetitiveAnalysisIcon" /></li>
                        <li className={activeItem === 'ProliferatorDetection' ? classes.ToggledActive : ''} onClick={() => PageToggler('ProliferatorDetection')}><img src={ProliferatorDetectionIcon} alt="ProliferatorDetectionIcon" /></li>
                        <li className={activeItem === 'TrackBack' ? classes.ToggledActive : ''} onClick={() => PageToggler('TrackBack')}><a href="https://www.talkwalker.com/"><img src={TrackBackIcon} alt="TrackBackIcon" /></a></li>
                        <li className={activeItem === 'ProfileAnalysis' ? classes.ToggledActive : ''} onClick={() => PageToggler('ProfileAnalysis')}><a href="https://dash.tweetbinder.com/report/free"><img src={ProfileAnalysisIcon} alt="ProfileAnalysisIcon" /></a></li>
                        <li className={activeItem === 'FollowerAnalysis' ? classes.ToggledActive : ''} onClick={() => PageToggler('FollowerAnalysis')}><a href="https://app.truthnest.com/"><img src={FollowerAnalysisIcon} alt="FollowerAnalysisIcon" /></a></li>
                        <li className={activeItem === 'SIMsDatabase' ? classes.ToggledActive : ''} onClick={() => PageToggler('SIMsDatabase')}><a href="https://subinfo.deadcom.live/Identity/Account/Login?ReturnUrl=%2F"><img src={SIMsDatabaseIcon} alt="SIMsDatabaseIcon" /></a></li>
                        <li className={activeItem === 'UserAnalysis' ? classes.ToggledActive : ''} onClick={() => PageToggler('UserAnalysis')}><a href="https://www.twitonomy.com/dashboard.php"><img src={UserAnalysisIcon} alt="UserAnalysisIcon" /></a></li>
                        <li className={activeItem === 'NetworkMapping' ? classes.ToggledActive : ''} onClick={() => PageToggler('NetworkMapping')}><a href="https://hoaxy.osome.iu.edu/error"><img src={NetworkMappingIcon} alt="NetworkMappingIcon" /></a></li>
                        <li className={activeItem === 'OSINTFramework' ? classes.ToggledActive : ''} onClick={() => PageToggler('OSINTFramework')}><a href='https://osintframework.com/'><img src={OSINTFrameworkIcon} alt="OSINTFrameworkIcon" /></a></li>
                    </ul>
                </nav>
            </div>
        );
    }

    return (
        <div>
            {sideDrawer}
        </div>
    );
};

export default SideBar