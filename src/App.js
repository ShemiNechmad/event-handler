import React from 'react';
import './App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';


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
  release() {
    var x = document.getElementById("notReleased");
    x.className='none';
  }
  block() {
    var x = document.getElementById("notReleased");
    x.className='notReleased';
  }


  render(){
    const topimg = require ('./Table.jpg');
    const roundpica = require ('./roundpica.jpg');
    const roundpicb = require ('./roundpicb.jpg');
    const roundpicc = require ('./roundpicc.jpg');
    var content =[{title:'Manage is Easy', 
                  description:'Have your own special page where you can set each event by date. You send your customers to manage their seats on their own. They get a modern, easy and professional platform where they can do it on their free time.'},
                  {title:'Hands off', 
                  description:'Once you opened a new event, here\'s no need to handle a thing till the event. At any point of time, you can have the list of guests and table, arranged by your customers. You can also print it for your workers. It saves calls, email writings, time to wait. Do all the arrangements you do, with one click.  '},
                  {title: 'Modern and fast',
                  description: 'Event-Handler is created with the latest technologies. You and your customers as well get to have a comfortable experience with well designed and high speed handling. Many of the platforms nowadays are old fashioned, include bugs and flash use which will is soon going to be unsupported for most browsers. It\'s time for that change.'}];

  return (
<div>
      <span>
        <div className="title">
        
          <span className="titlogo">Event Handler</span>
          <div className="topRightTitle">
            <Link style={{display:'table-cell',verticalAlign:'middle', color:'blue', cursor:'pointer', textDecoration:'none'}} to='/signup'>Sign up</Link> &nbsp; &nbsp;
            <span style={{display:'table-cell',verticalAlign:'middle', color:'blue', cursor:'pointer'}} onClick={this.block}>Login</span> &nbsp; &nbsp;
            <span className="hamburgerbar">
            <i className="fa fa-bars" onClick={this.hambar}></i>
            </span>
          </div>
          
        </div>
      </span>  
      <div className="hamnav" id="hamnav">
            <br/><br/>
            &nbsp;&nbsp;<span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>About</span><br/>
            <br/>
            &nbsp;&nbsp;<span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>Package</span><br/>
            <br/>
            &nbsp;&nbsp;<span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>Contact</span><br/>
            <br/>
      </div>
      <div id="topImageDiv" className="topImageDiv">
        <img src={topimg} className="topImage" alt="topImage" ></img>
      </div>
   
    <div className='describtion'>
      <span>Let your customers place their guests</span>
    </div>
    <br/>
    <div className='detailed'>
      <span>Event Handler is the most comfortable tool which events hall owners can give to their celebrating customers.</span>
      <br/>
      <span>An online software to help schedule the sitting places of the guests.
         After a professional, friendly and fast procedure, the hall staff takes the list of guests and their seats for arrangements on the day of the event.
      </span>
    </div>
    <br/><br/><br/>
    <div className='title'>
    <div style={{color:'#8469C3', fontSize:'25px', textAlign:'center', width:'100%', margin:'auto'}}>Here is how it works:</div>
   
      <span className='howItWorks'>
       <div style={{fontSize:'20px', color:'#2E1684'}}>Register</div>
        <br/> 
        <img src={roundpica} className="roundPic" alt="roundpica" ></img><br/>
        <div className="details">
          Create an account for your event hall for $10 monthly fee and begin creating events for your customers.
        </div>
      </span>
      <span className='howItWorks'>
      <div style={{fontSize:'20px', color:'#2E1684'}}>Set event</div>
        <br/>    
        <img src={roundpicc} className="roundPic" alt="roundpicc" ></img><br/>
        <div className="details">
          Make a special event page where your customers can manage placing their guests in tables by number.
        </div>
      </span>
      <span className='howItWorks'>
      <div style={{fontSize:'20px', color:'#2E1684'}}>Arrange seats</div>
        <br/>
        <img src={roundpicb} className="roundPic" alt="roundpicb" ></img><br/>
        <div className="details">
          Your customers use our special tool on their free time and on the day of the event you pick the result to make all the arrangements you need.
        </div>
      </span>
      <br/>
      <br/>
     
    </div>

    <div className='clearfix'></div>

    <div className='sliderHouse'>
    <br/>
    <div style={{ textAlign:'center'  }}>
    <span style={{color:'white', fontSize:'35px', fontWeight:'bold'}}>Learn the advantages</span>
  </div>
    <br/>
    <Slider className='Slider'>
      {content.map((article, index) => <div key={index}>
      <div className='slideTitle'>{article.title}</div>
      <div className='slideArticle'>{article.description}</div>
      </div>)}
    </Slider>
    </div>
<br/>
    <div style={{height:'50px', textAlign:'center'}}>
    <span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>About</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>Package</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>Contact</span>

    </div>


    <div id="notReleased" className='none'>
      <div className='box'>
        <br/>
        <div style={{width:'90%', margin:'auto'}}>Event Handler is due to be released on February 2020.</div>
        <br/>
        Hold tight!<br/>
        <br/>
        <button style={{width:'50%'}} onClick={this.release}>Ok</button>
        <br/> <br/>
      </div>
    </div>


</div>


  );
}
}

export default App;
