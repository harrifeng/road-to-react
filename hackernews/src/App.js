import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://github.com/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/redux',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          list.map(function(item) {
            return (
              <div key={item.objectID}>
                {item.title}
              </div>)
          })
        }
      </div>
    );
  }
}

export default App;
