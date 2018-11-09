import React, { Component } from 'react';
import CoursePage from './components/CoursePage.js';
import NavBar from './components/NavBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      course: 2
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <CoursePage courseData={this.state.course}/>;
      </div>
    );
  }

}

export default App;
