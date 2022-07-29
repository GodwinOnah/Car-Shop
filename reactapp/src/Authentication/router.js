import React,{Component} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,Redirect,Navigate} from "react-router-dom";
import SignupPage from "./signuppage";
import LoginPage from "./loginpage";
import {Maintenance} from '../Content/Js Files/Navigation/maintenance';
import {Management} from '../Content/Js Files/Navigation/management';
import {Rentals} from '../Content/Js Files/Navigation/rentals';
import {About} from '../Content/Js Files/Navigation/about';
import CarViewCard from "../Content/Js Files/Body/CarItems/CarViewCard";
import MyNav from '../Content/Js Files/Navigation/MyNav.js';
import Main from "../Content/Js Files/Body/CarItems/Main";



 class App extends React.Component{



     constructor(props){

           super(props);

              this.state = {

                  isLogin:''
              };


  }




   onIsLoginCheck =({isLogin})=>{



                     this.setState({isLogin:isLogin});
                    
                  }

render(){




  return (
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<  Main />}/>

          <Route path="/obande_luxury_cars" element={<Main />}/>
          <Route path="/CarViewCard" element={<CarViewCard />}/>
          <Route path="/maintenance" element={<Maintenance />}/>
          <Route path="/management" element={<Management />}/>
          <Route path="/rentals" element={<Rentals />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
          
          
      </Routes>
    </BrowserRouter>
  );}
}

export default App;