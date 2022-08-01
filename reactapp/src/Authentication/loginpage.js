import React,{Component} from 'react';
import {Link ,useNavigate,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import {NoPageFound} from './noPageFound';
import MyFooter from '../Content/Js Files/Footer/footer.js';


import './loginpage.css'




   class LoginPage extends React.Component{



     constructor(props){

           super(props);

              this.state = {

                  signInEmail:'',
                  signInPassword:''
                 
              };


  }



onEmailChange=(e)=>{

this.setState({signInEmail:e.target.value})

}


onPasswordChange=(e)=>{

this.setState({signInPassword:e.target.value})

}




onSubmitChange=()=>{


  let navigate=useNavigate();



fetch('http://localhost:3001/login',{

  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({

      email:this.state.signInEmail,
      password:this.state.signInPassword

      })
            }).then(response=>response.json())
                .then(data=>{


                  if(data==="success"){
                      navigate('/signup')

                  }


                // this.props.onIsLoginCheck(data);
                  
                }

                  )}


      

              render(){

                console.log(this.state.signInEmail)

               

                         	return(
                                      <>
                                   		<div class="loginpage">

                                  	

                                  <main class="pa4 black-80  ">
                                        <form class="measure center loginBackground" method="post" >

                                              <fieldset id="sign_up" class="ba b--transparent ph0 mh0">

                                                <legend class="f4 fw6 ph0 mh0">Sign In</legend>

                                                <div class="mt3">
                                                  
                                                  <input onChange={this.onEmailChange} class="  w-100" type="email" name="email-address"  id="email-address" placeholder="Email address"/>
                                                </div>

                                                <div class="mv3">
                                                  
                                                  <input   onChange={this.onPasswordChange} class="   w-100" type="password" name="password"  id="password" placeholder="Password"/>
                                                </div>

                                                <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                                              </fieldset>

                                          <div>
                                           <input onClick={this.onSubmitChange} class="btn btn-success logbtns" value="login" type="submit"/>
                                           <Link to="/obande_luxury_cars"><input class="btn btn-success logbtns" value="Home" type="submit"/></Link>
                                          </div>

                                          <div class="lh-copy mt3">
                                            <Link to="/signuppage">sign up</Link>
                                            <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                                          </div>
                                          
                                        </form>
                                </main>

                                

                                </div>

                                 <MyFooter/>

                                  </>

                        			

                        	)}}

  	 export default LoginPage;