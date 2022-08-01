import React,{Component} from 'react';
import './footer.css';




class MyFooter extends Component {

  render(){

        return ( 


            <>

          <div class="row nav justify-content-center footme">

          <div class="col-6 pad">

          <ul >
  <li class="nav-item">
    <a class="nav-link solo1" aria-current="page" href="#">Terms & Conditions</a>
  </li>
  <li class="nav-item solo1">
    <a class="nav-link" href="#">Cookies</a>
  </li>
  <li class="nav-item solo1">
    <a class="nav-link" href="#">Privacy</a>
  </li>
 

  </ul>
</div>


<div class="col-6 ">
  
<ul>

<ul>
  <li class="nav-item">
    <a class="nav-link solo1" aria-current="page" href="#">About us</a>
  </li>
  <li class="nav-item solo1">
    <a class="nav-link" href="#">Contact Us</a>
  </li>
  <li class="nav-item solo1">
    <a class="nav-link" href="#">Careers</a>
  </li>
  <li class="nav-item solo1">
    <p id="address">Address: 30, Craigpark Avenue, Dennistound, Glasgow,Scotland</p>
  </li>

  </ul>
  
  
</ul>
</div>


</div>

</>


          );}
}

  export default MyFooter;