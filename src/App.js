import React, { Component } from 'react';
import Post from './Post/component/Post';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);

      this.addPost = this.addPost.bind(this);
      this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

      this.state = {
          posts: [],
          newPostBody: '',
      }
  }

  addPost() {
    const newState = Object.assign({}, this.state);
    newState.posts.push(this.state.newPostBody);
    newState.newPostBody = '';
    this.setState(newState);
  }

  handlePostEditorInputChange(e) {
      this.setState({
          newPostBody: e.target.value
      })
  }

  render() {
    return (
      <div>
          {
            this.state.posts.map((postBody, index) => {
                return (
                <Post key={index} postBody={postBody} />
                )
            })
          }
          <div className="panel panel-default post-editor">
            <div className="panel-body">
                <textarea className="form-control post-editor-input"
                          value={this.state.newPostBody}
                          onChange={this.handlePostEditorInputChange}/>
                <button className="btn btn-success post-editor-button"
                onClick={this.addPost}>Post</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
