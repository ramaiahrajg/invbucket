import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SingleTheme from './SingleTheme'


class Theme extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/theme' component={Home}/>
        <Route path='/theme/:number' component={SingleTheme}/>
    </Switch>
    );
  }

}

export default Theme
