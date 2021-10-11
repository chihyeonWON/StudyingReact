import React, { Component } from 'react';
import TOC from './components/TOC.js';
import Subject from './components/Subject.js';
import './App.css';
class Content extends Component{
  render(){
    return(
      <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
    );
  }
}
class App extends Component{ 
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject> 
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;