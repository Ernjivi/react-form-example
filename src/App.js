import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    userName: '',
    firstName: '',
    lastName: ''
  }

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(this.state);
  }

  onChangeHandler = (evt) => {
    const {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.onChangeHandler} />
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onChangeHandler} />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.onChangeHandler} />
        <input type="submit" value="click"/>
      </form>
    );
  }
}

export default App;
