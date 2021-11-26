import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)

  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={ progress }
          height={ 2 }
        />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <News setProgress={ setProgress } apikey={ apikey } key='general' pageSize={ pageSize } country="in" category='general' />
          </Route>
          <Route exact path='/ae'>
            <News setProgress={ setProgress } apikey={ apikey } key='ae' pageSize={ pageSize } country="ae" category='general' />
          </Route>
          <Route exact path='/ar'>
            <News setProgress={ setProgress } apikey={ apikey } key='ar' pageSize={ pageSize } country="ar" category='general' />
          </Route>
          <Route exact path='/at'>
            <News setProgress={ setProgress } apikey={ apikey } key='at' pageSize={ pageSize } country="at" category='general' />
          </Route>
          <Route exact path='/au'>
            <News setProgress={ setProgress } apikey={ apikey } key='au' pageSize={ pageSize } country="au" category='general' />
          </Route>
          <Route exact path='/be'>
            <News setProgress={ setProgress } apikey={ apikey } key='be' pageSize={ pageSize } country="be" category='general' />
          </Route>
          <Route exact path='/bg'>
            <News setProgress={ setProgress } apikey={ apikey } key='bg' pageSize={ pageSize } country="bg" category='general' />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}
export default App;