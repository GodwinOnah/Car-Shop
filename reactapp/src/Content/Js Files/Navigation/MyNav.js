import React,{Component} from 'react';
import '../../CSS Files/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Log,LogPageChoice} from './log';

import {Link } from "react-router-dom";
import {AddToCart,CarInfo,Prompter}  from '../Body/CarItems/quantity'
import {nav, ul, li,Button, Form, Input,i, span, img,
Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown, Card, Prompt, grid, flex} from 'react-bootstrap';




const MyNav =({onLogoutClick,state,onIsLoginCheck})=> {

 
        return (


            <nav class="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top sticky" >
             
             <div class="container-fluid">

             <ul class="navbar-nav me-auto mb-2 mb-lg-0 ulNavItems">


                <li class="nav-item navItems">

                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      menu
                      </button>

                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><a class="dropdown-item" >Personal Info</a></li>
                        <li><a class="dropdown-item" >Basket</a></li>
                        <li><a class="dropdown-item" href="#">Myfavourites</a></li>
                        <li><a class="dropdown-item" href="#">Contact us</a></li>
                        <li><a class="dropdown-item" href="#">Help</a></li>
                      </ul>
                     

                </li>
            

                <li class="nav-item navItems">
              
                      <Link to="/management" class="log" >Management</Link>
                </li>

               
                <li class="nav-item navItems">
                     <Link to="/about" class="log" >About</Link>
                </li>

                <li class="nav-item dropdown navItems">
                      <a class="nav-link dropdown-toggle log" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><Link to="/Rentals" class="log">Car Rentals</Link></a></li>
                        <li><a class="dropdown-item" ><Link to="/maintenance" class="log">Car Maintenance</Link></a></li>
                        <li><a class="dropdown-item" href="#">Others</a></li>
                      </ul>

                      </li> 

                       
                    <li class="nav-item navItems">  

                     <Link to="/obande_luxury_cars"   class="log" id="open-modal">Home</Link>
                 </li>

                   <li class="nav-item navItems">  

                     <Link to="/loginpage"   class="log" id="open-modal">Login</Link>
                 </li>
                 
                           
                 <li class="nav-item navItems">  

                     <Link to="/signuppage"   class="log" id="open-modal">Signup</Link>
                 </li>
                          

                    

                <li class="nav-item  navItems">
                          <span id="cartLabel">Cart</span>
                          
                          <span id="cartQuantity" class="border border-primary cartQuantity">0</span>

                </li>

          </ul>

                         
                          

             


    
  </div>
  
</nav>


        );

}


  export default MyNav;