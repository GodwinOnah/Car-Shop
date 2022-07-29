import React,{Component} from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";

import './loginpage.css'




   


    class SignupPage extends React.Component{



     constructor(props){

           super(props);

              this.state = {
                

                  signUpUserName:'',
                  signUpEmail:'',
                   signUpAddress:'',
                    signUpPhone:'',
                  signUpPassword:'',
                  signUpConfirmPassword:''
                 
              };


  }



onUserNameChange=(e)=>{

this.setState({signUpUserName:e.target.value})

}

onEmailChange=(e)=>{

this.setState({signInEmail:e.target.value})

}


onAddressChange=(e)=>{

this.setState({signUpAddress:e.target.value})

}


onPhoneChange=(e)=>{

this.setState({signUpPhone:e.target.value})

}

onPasswordChange=(e)=>{

this.setState({signInPassword:e.target.value})

}


onConfirmPasswordChange=(e)=>{

this.setState({signInPassword:e.target.value})

}




onSubmitChange=()=>{

fetch('http://localhost:3001/signup',{

  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({

      userName:this.state.signUpUserName,
      email:this.state.signInEmail,
      address:this.state.signUpAddress,
       phone:this.state.signUpPhone,
      password:this.state.signInPassword

      })
            }).then(response=>response.json())
                .then(user=>{


                  if(user){

                    this.props.loadUser(user);
                   
                  }
                }

                  )}


      

              render(){

              



   	return(

   		<div class="signuppage">

  	

  <main class="pa4 black-80  ">

  <form class="measure center logoutBackground" method="post">

    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign Up</legend>
      <div class="mt3">

       <input onChange={this.onUserNameChange} class="  w-100 " type="text" name="username"  id="username" placeholder="Username"/>

       <input onChange={this.onEmailChange} class="  w-100" type="email" name="email-address"  id="email-address" placeholder="Email address"/>

      </div>
        <input onChange={this.onAddressChange} class=" w-100" type="text" name="homeAddress"  id="homeAddress" placeholder="Home Address"/>

      <input onChange={this.onPhoneChange} class="  w-100" type="text" name="phone"  id="phone" placeholder="Phone"/>
      

      <div class="mv3">
        
        <input onChange={this.onPasswordChange} class="  w-100" type="password" name="password"  id="password" placeholder="Password"/>

        <input  onChange={this.signUpConfirmPassword}class="   w-100" type="password" name="confirmPassword"  id="confirmPassword" placeholder="Confirm Password"/>
      
      </div>
      
    </fieldset>
    <div class="">
      <input onClick={this.onSubmitChange} class=" btn btn-success  submitbtn logbtns" type="submit" value="Sign up" />
      <Link to="/obande_luxury_cars"><input class="btn btn-success logbtns" value="Home" type="submit"/></Link>
    </div>
    <div class="lh-copy mt3">
      <span>Already a user? </span><Link to="/loginpage">Login</Link>
      <a  class="f6 link dim black db"> <br/>Forgot your password?</a>
    </div>
  </form>
</main>

				</div>



  			

  	)}}

  	 export default SignupPage;

