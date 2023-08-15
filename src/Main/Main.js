import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import SideBar from "./SideBar/SideBar";
import Header from "../Header/Header";
import classes from './Main.module.css';
import DataScraping from "./DataScraping/DataScraping";
import HashtagAnalysis from './HashtagAnalysis/HashtagAnalysis';
import CompetitiveAnalysis from './CompetitiveAnalysis/CompetitiveAnalysis';
import ProliferatorDetection from './ProliferatorDetection/ProliferatorDetection';
import TrackBack from './TrackBack/TrackBack';
import ProfileAnalysis from './ProfileAnalysis/ProfileAnalysis';
import NetworkMapping from './NetworkMapping/NetworkMapping';
import FollowerAnalysis from './FollowerAnalysis/FollowerAnalysis';
import SIMsDatabase from './SIMsDatabase/SIMsDatabase';
import UserAnalysis from './UserAnalysis/UserAnalysis';
import OSINTFramework from './OSINTFramework/OSINTFramework';
import Loader from '../Loader/Loader';

const Main = () => {
    const [sideDrawerToggler, setSideDrawerToggler] = useState(true);
    const [loading, setLoading] = useState(false);

    const DrawerToggler = () => {
        setSideDrawerToggler(!sideDrawerToggler)
    }

    const loaderHandler = () => {
        setLoading(true);
    }

    let paddingLeft = {
        paddingLeft: 100
    };

    if (sideDrawerToggler) {
        paddingLeft = {
            paddingLeft: 350
        };
    }

    return (
        <div className={classes.Main} style={paddingLeft}>
            <SideBar
                DrawerToggler={DrawerToggler}
                sideDrawerToggler={sideDrawerToggler}
                loaderHandler={loaderHandler}
                setLoading={setLoading} />
            <div className={classes.RightSide}>
                <div className={classes.Header}>
                    <Header />
                </div>
                <Routes>
                    <Route path="/DataScraping" element={<DataScraping />} activeClassName="active" />
                    <Route path="/HashtagAnalysis" element={<HashtagAnalysis />} />
                    <Route path="/CompetitiveAnalysis" element={<CompetitiveAnalysis />} />
                    <Route path="/ProliferatorDetection" element={<ProliferatorDetection />} />
                    <Route path="/TrackBack" element={<TrackBack />} />
                    <Route path="/ProfileAnalysis" element={<ProfileAnalysis />} />
                    <Route path="/NetworkMapping" element={<NetworkMapping />} />
                    <Route path="/FollowerAnalysis" element={<FollowerAnalysis />} />
                    <Route path="/SIMsDatabase" element={<SIMsDatabase />} />
                    <Route path="/UserAnalysis" element={<UserAnalysis />} />
                    <Route path="/OSINTFramework" element={<OSINTFramework />} />
                </Routes>
                {loading ? <Loader /> : ''}
            </div>
        </div>
    );
};

export default Main