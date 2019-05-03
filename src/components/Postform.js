import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Title:</label><br />
            <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
          </div>
          <br />
          <div>
            <label>Body:</label><br />
            <textarea name="body" value={this.state.body} onChange={this.changeHandler} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);