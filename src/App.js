import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Intro from './Intro/Intro';
import Main from './Main/Main';
import DataScraping from './Main/DataScraping/DataScraping';
import HashtagAnalysis from './Main/HashtagAnalysis/HashtagAnalysis';
import CompetitiveAnalysis from './Main/CompetitiveAnalysis/CompetitiveAnalysis';
import ProliferatorDetection from './Main/ProliferatorDetection/ProliferatorDetection';
import TrackBack from './Main/TrackBack/TrackBack';
import ProfileAnalysis from './Main/ProfileAnalysis/ProfileAnalysis';
import NetworkMapping from './Main/NetworkMapping/NetworkMapping';
import FollowerAnalysis from './Main/FollowerAnalysis/FollowerAnalysis';
import SIMsDatabase from './Main/SIMsDatabase/SIMsDatabase';
import UserAnalysis from './Main/UserAnalysis/UserAnalysis';
import OSINTFramework from './Main/OSINTFramework/OSINTFramework';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Main" element={<Main />}>
          <Route path="/Main/DataScraping" element={<DataScraping />} />
          <Route path="/Main/CompetitiveAnalysis" element={<CompetitiveAnalysis />} />
          <Route path="/Main/ProliferatorDetection" element={<ProliferatorDetection />} />
          <Route path="/Main/HashtagAnalysis" element={<HashtagAnalysis />} />
          <Route path="/Main/TrackBack" element={<TrackBack />} />
          <Route path="/Main/ProfileAnalysis" element={<ProfileAnalysis />} />
          <Route path="/Main/NetworkMapping" element={<NetworkMapping />} />
          <Route path="/Main/FollowerAnalysis" element={<FollowerAnalysis />} />
          <Route path="/Main/SIMsDatabase" element={<SIMsDatabase />} />
          <Route path="/Main/UserAnalysis" element={<UserAnalysis />} />
          <Route path="/Main/OSINTFramework" element={<OSINTFramework />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;