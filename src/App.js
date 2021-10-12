import React, { Component } from 'react';
import Subject from './components/Subject.js';
import TOC from './components/TOC.js';
import Content from './components/Content.js';
import './App.css';
class App extends Component{ 
  constructor(props) {
   super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
       {id:1, title:'HTML', desc:'HTML is for information'},
       {id:2, title:'CSS', desc:'CSS is for design'},
       {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
   } 
 }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> 
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;