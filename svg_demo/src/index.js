import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import App from './components/App'

class Main extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/a" render={()=><div>HomePage</div>} />
          {/*<Route exact path="/app" component={App} />*/}
          <Route exact path="/app" render={()=><App name={'zhaoshanshan'} age={12} handle={()=>{console.log('hello')}}/>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<Main />, document.getElementById('root'))