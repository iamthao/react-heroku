import React, { Component } from 'react';
import '../styles/app.scss'
import AppToDo from '../components/ToDo/App'
import Counter from '../containers/Count/AddCount'

class App extends Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src="./public/images/logo.png" className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
                  <AppToDo/>
                <hr/>
                <Counter/>
            </div>
        );
    }
}

export default App;
