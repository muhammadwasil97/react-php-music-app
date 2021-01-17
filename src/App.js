import React, {useState} from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import AudioPlayer from './components/AudioPlayer';
import Trending from './components/Trending';
import NewRelease from './components/NewRelease';
import TopChart from './components/TopChart';
import Podcast from "./components/Podcast";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Singer from './components/Singer';
import Footer from './components/Footer';
import About from './components/About';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div>
      <Router basename="/">
        <Sidebar />
        <Topbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/new" component={NewRelease} />
          <Route exact path="/top" component={TopChart} />
          <Route exact path="/podcast" component={Podcast} />
          <Route exact path='/audio-player/:id' component={AudioPlayer} />
          <Route exact path='/singer/:singer' component={Singer} />
          <Route exact path='/about' component={About} />
          <Route exact path='/userinfo' component={UserInfo} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
