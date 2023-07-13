
import './App.css';

import React, { Component } from 'react';
import NavBar from "./components/NavBar" ;
import News from './components/News';
import {
    BrowserRouter as Box,
    Route,
    Routes
  } from "react-router-dom";
  import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize="9";
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0,
  }

  setProgress=(progress)=>{
this.setState({
  progress:progress,
})
  }
  render() {
    return (
      <div>
            <Box>
            
            <LoadingBar
        color='#f11946'
         height={6}
        progress={this.state.progress}
        
           />
       
            <NavBar />
          
             <Routes>
              
              <Route         />
              <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" pageSize={this.pagesize} country="in" category="general"/>}/>
              <Route exact path="/sport"  element={ <News  setProgress={this.setProgress} key="sport" pageSize={this.pageSize} country="in" category="sport"/>}/>
              <Route exact path="/entertainment"  element={ <News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
              <Route exact path="/general"  element={ <News   setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
              <Route exact path="/health"  element={ <News  setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
              <Route exact path="/science"  element={ <News  setProgress={this.setProgress} key="science" pageSize={this.pageSize}country="in" category="science"/>}/>
              <Route exact path="/tech"  element={ <News setProgress={this.setProgress} key="tech" pageSize={this.pageSize} country="in" category="tech"/>}/>
              <Route exact path="/business"  element={ <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>


             </Routes>

            </Box>

      </div>
    )
  }
}