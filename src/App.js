import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact'
import Navigation from './components/navigation/Navigation'
import Alert from './components/alert/Alert'
import Jeopardy from './components/jeopardy/Jeopardy'


function App() {
    return (
      <div className="App">

        <Navigation />
        
        <Switch> 
          <Route
            exact
            path='/'
            render={(props) => <Welcome {...props} name='Kedersen' />}
          />
          <Route
            path='/welcome/:name' component={Welcome} />        
          <Route
            path='/Clock' component={Clock} />
          <Route
            exact
            path='/Contact' component={Contact} />
          <Route
            exact
            path='/Jeopardy' component={Jeopardy} />
          <Route component={Alert}/>

        </Switch>
      </div>
    )
  }


export default App
