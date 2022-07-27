
import './nav.css';
import './Nav1';
import React,{Component} from 'react';


class MyNav extends Component {

  render(){
  return (
<nav class="navbar navbar-expand-lg   sticky">
         <div class="container-fluid">

              <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-bars"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item" href="#">Personal Info</a></li>
                <li><a class="dropdown-item" href="#">Basket</a></li>
                <li><a class="dropdown-item" href="#">Myfavourites</a></li>
                <li><a class="dropdown-item" href="#">Login</a></li>
                <li><button class="dropdown-item" id="logingout" value="loginpage.html" onclick="openNew()">Logout</button></li>
                <li><a class="dropdown-item" href="#">Register as a new customer</a></li>
                <li><a class="dropdown-item" href="#">Help</a></li>
              </ul>
            </div>
            

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item navItems">
                  <a class="nav-link" href="#">About</a>
                </li>

                <li class="nav-item navItems">
                  <a class="nav-link" href="#">Filter</a>
                </li>
                <li class="nav-item dropdown navItems">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Car sales</a></li>
                    <li><a class="dropdown-item" href="#">Car Rentals</a></li>
                    <li><a class="dropdown-item" href="#">Car Maintenance</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> 
               
                

                    
                         <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>

                     

              </ul>

              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn bg-success searchGlass" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                <button class="btn btn-outline-success cart" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            <span style="color: red;">Cart</span>
                            <span class="badge bg-primary text-white ms-1 rounded-pill">0</span>
                        </button>
              </form>
            </div>
          </div>
        </nav>

        );}
}

  