import React,{Component} from 'react';
import './footer.css';




class MyFooter extends Component {

  render(){

        return (

          <ul class="nav justify-content-center footme">
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


          );}
}

  export default MyFooter;