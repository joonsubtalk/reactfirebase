import React, { Component } from 'react';
import Post from './Post/component/Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Post/>
          <div className="panel panel-default post-editor">
            <div className="panel-body">
                <textarea className="form-control post-editor-input" />
                <button className="btn btn-success post-editor-button">Post</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
