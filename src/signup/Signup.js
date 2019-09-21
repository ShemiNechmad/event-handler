import React from '../../node_modules/react';
import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state= {firstName:'', lastName:'', hallName:'', email:'',password1:'',password2:'', monitor:'I come from client'};
    this.firstNameChange=this.firstNameChange.bind(this);
    this.lastNameChange=this.lastNameChange.bind(this);
    this.hallNameChange=this.hallNameChange.bind(this);
    this.emailChange=this.emailChange.bind(this);
    this.password1Change=this.password1Change.bind(this);
    this.password2Change=this.password2Change.bind(this);
    this.signUpButton=this.signUpButton.bind(this);
    
  }

  componentDidMount(){
    this.callBackendAPI()
    .then(res => this.setState({ monitor: res.monitor }))
    .catch(err => console.log(err));
  }
  componentWillUnmount(){
 
  }

  callBackendAPI = async () => {
    const response = await fetch('/ping');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  firstNameChange(event){
    this.setState({firstName:event.target.value});
  }
  lastNameChange(event){
    this.setState({lastName:event.target.value});
  }
  hallNameChange(event){
    this.setState({hallName:event.target.value});
  }
  emailChange(event){
    this.setState({email:event.target.value});
  }
  password1Change(event){
    this.setState({password1:event.target.value});
  }
  password2Change(event){
    this.setState({password2:event.target.value});
  }
  signUpButton(){
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.hallName);
    console.log(this.state.email);
    console.log(this.state.password1);
    console.log(this.state.password2);
  }

  hambar() {
    var x = document.getElementById("hamnav");
    if (x.className === "SUhamnav") {
      x.className = "SUhamnavTrue";
    } else {
      x.className = "SUhamnav";
    }
  }
  

  render(){
  return (
<div>
  <span>
        <div className="SUtitle">
          <Link className="SUtitlogo" to='../'>Event Handler</Link>
          <div className="SUtopRightTitle">
          <span className="SUhamburgerbar">
            <i className="fa fa-bars" onClick={this.hambar}></i>
            </span>
          </div>
          
        </div>
 </span>  
      <div className="SUhamnav" id="hamnav">
            <br/><br/>
            &nbsp;&nbsp;<span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>About</span><br/>
            <br/>
            &nbsp;&nbsp;<span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>Package</span><br/>
            <br/>
            &nbsp;&nbsp;<span style= {{color:'blue', cursor:'pointer'}} onClick={this.block}>Contact</span><br/>
            <br/>
      </div>
      <br/><br/>
      <div className='SUbody'>
        <br/>
        <span style={{width:'86%',margin:'auto',display:'block', textAlign:'center', fontSize:'25px'}}>Sign up with Event-Handler in no time.</span>
        <br/>
        <span style={{textAlign:'center', width:'86%',maxWidth:'600px', margin:'auto', display:'block'}}>We built an easy and fast registration process for you to begin using the software. Please fill up the form and take the next few steps ahead.</span>
        <br/>

        <div style={{width:'100%', maxWidth:'900px', backgroundColor:'lightgrey'}}>
          <br/>
          <div style={{width:'90%', margin:'auto'}}>
         
          <input type='text' value={this.state.firstName} onChange={this.firstNameChange} placeholder='First name' style={{fontSize:'18px', width:'70%', maxWidth:'200px', borderRadius:'5px', padding:'2px 20px' }}></input><br/>
          <br/>
        
          <input type='text' value={this.state.lastName} onChange={this.lastNameChange} placeholder='Last name' style={{fontSize:'18px', width:'70%', maxWidth:'200px', borderRadius:'5px', padding:'2px 20px' }}></input><br/>
          <br/>
          
          <input type='text' value={this.state.hallName} onChange={this.hallNameChange} placeholder='Name of your hall' style={{fontSize:'18px', width:'70%', maxWidth:'200px', borderRadius:'5px', padding:'2px 20px' }}></input><br/>
          <br/>
       
          <input type='text' value={this.state.email} onChange={this.emailChange} placeholder='Your email' style={{fontSize:'18px', width:'70%', maxWidth:'200px', borderRadius:'5px', padding:'2px 20px' }}></input><br/>
          <br/>
         
          <input type='password' value={this.state.password1} onChange={this.password1Change} placeholder='Password' style={{fontSize:'18px', width:'70%', maxWidth:'200px', borderRadius:'5px', padding:'2px 20px' }}></input><br/>
          <br/>
    
          <input type='password' value={this.state.password2} onChange={this.password2Change} placeholder='Confirm password' style={{fontSize:'18px', width:'70%', maxWidth:'200px', borderRadius:'5px', padding:'2px 20px' }}></input><br/>
          <br/>
          <button onClick={this.signUpButton} style={{padding:'6px 30px', borderRadius:'5px', backgroundColor:'blue', color:'white', fontWeight:'bold', fontSize:'18px'}}>Sign up</button>
          &nbsp;&nbsp; <span style={{color:'red'}}>{this.state.monitor}</span>
          <br/>
          <br/>
          </div>
        </div>
      </div>
</div>


  );
}
}

export default Signup;