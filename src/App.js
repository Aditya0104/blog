import React from 'react'
import "./assets/scss/App.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Author from './pages/AuthorList'
import Home from '../src/pages/Home'
import SinglePost from "../src/pages/SinglePost"


const App = () => {
  return (
    <div>
     
    <Router>
    
      <Switch>
       <Route path="/home" exact component={Home} />  
       <Route path="/author" component={Author} />
       <Route path="/singlePost" component={SinglePost} />
      </Switch>
    </Router>
    
       </div>
  );
}

export default App;
