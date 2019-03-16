import React, { Component } from 'react';
import Calender from "./components/Calender";

const style = { //this for Calender
  position:"relative",
  margin:"50px auto"
  
}


class App extends Component {
  
  onDayClick = (e ,day) => {
    alert("The Day You Select Is : " + day);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Calender style= {style} width="302px" onDayClick={(e, day)=> this.onDayClick(e,day)}  />
        </header>
      </div>
    );
  }
}

export default App;
