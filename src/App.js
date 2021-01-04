import React, {useState} from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import AudioPlayer from './components/AudioPlayer';
import Trending from './components/Trending';
import NewRelease from './components/NewRelease';
import TopChart from './components/TopChart';
import Podcast from "./components/Podcast";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router basename="/music_app_backend">
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/new" component={NewRelease} />
          <Route exact path="/top" component={TopChart} />
          <Route exact path="/podcast" component={Podcast} />
          <Route exact path='/audio-player/:id' component={AudioPlayer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
