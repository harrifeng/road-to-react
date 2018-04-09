import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io.react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
];

class App extends Component {
  render() {
    const hello = 'Welcome to the Road to learn React, Again'
    return (
      <div className="App">
        {list.map(function(item) {
          return <div>{item.title}</div>
        })}
      </div>
    );
  }
}

export default App;
