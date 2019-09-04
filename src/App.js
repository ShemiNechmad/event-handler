import React from 'react';
import './App.css';

class App extends React.Component{


  componentDidMount(){

  }
  componentWillUnmount(){
 
  }
  hambar() {
    var x = document.getElementById("hamnav");
    if (x.className === "hamnav") {
      x.className = "hamnavTrue";
    } else {
      x.className = "hamnav";
    }
  }


  render(){
  return (
<div>
      <span>
        <div className="title">
          <span className="titlogo">Event Handler</span>
          <span className="hamburgerbar">
          <i className="fa fa-bars" onClick={this.hambar}></i>
          </span>

          
        </div>
      </span>  
      <div className="hamnav" id="hamnav">
            <a href="#home">Home</a><br/>
            <a href="#news">News</a><br/>
            <a href="#contact">Contact</a><br/>
            <a href="#SignUp">Signup</a><br/>
            <a href="#Login">Login</a>
          </div>
      <span>abc</span>
  


</div>


  );
}
}

export default App;
