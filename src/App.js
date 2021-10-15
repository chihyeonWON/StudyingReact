import React, { Component } from 'react';
import Subject from './components/Subject.js';
import TOC from './components/TOC.js';
import ReadContent from './components/ReadContent.js';
import CreateContent from './components/CreateContent.js';
import Control from './components/Control.js';
import './App.css';
class App extends Component{ 
  constructor(props) {
   super(props);
    this.max_content_id = 3; // id 값을 지정할 때 참고하는 정보 UI에 영향X state에 넣으면 불필요한 렌더링 발생 가능
    this.state = {
      mode:'read',
      selected_content_id: 2,
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc = {_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      } 
    } else if (this.state.mode === 'create') {
        _article = <CreateContent onSubmit={function(_title, _desc) {
          // add content to this.state.contents
          this.max_content_id = this.max_content +1;
          /*this.state.contents.push(
            {id:this.max_content_id, title: _title, desc:_desc}
          );
          this.setState({
            contents:this.state.contents
          })*/ 
          var _contents = this.state.contents.concat(
             {id:this.max_content_id, title: _title, desc:_desc}
          )
          this.setState({
            contents:_contents
          });
          console.log(_title, _desc)
        }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {
            function(){
              this.setState({ mode:'welcome' }); 
            }.bind(this)}
        >
        </Subject>
        <TOC
          onChangePage={
            function(id) {
              this.setState({
                 mode:'read',
                 selected_content_id : Number(id)
              });
            }.bind(this)
          } 
          data={this.state.contents}></TOC>
        <Control onChangeMode = {function(_mode){
          this.setState({ mode:_mode });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;