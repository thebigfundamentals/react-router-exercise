import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import bud from './images/bud.jpg';
import bart from './images/bart.jpg';
import francisco from './images/francisco.jpg';
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Bud",
        age: 8,
        src: bud,
        facts: [
          "Pretty chill",
          "There is no such thing as over cuddling for him",
          "Will lick you in the face"
        ]
      },
      {
        name: "Bart",
        age: 10,
        src: bart,
        facts: [
          "Annoying",
          "Pick up fights he can not handle",
          "Jealous and lovingly"
        ]
      },
      {
        name: "Francisco",
        age: '??',
        src: francisco,
        facts: [
          "Sleep",
          "Eat",
          "Repeat"
        ]
      }
    ]
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
