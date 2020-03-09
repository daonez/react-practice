import React ,{Component} from "react";
import "./App.css";

class App extends React.Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I am a react app</h1>
    //   </div>
    // );
    // return React.createElement('div',null,'h1','Hi, I am a react app')
    return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
