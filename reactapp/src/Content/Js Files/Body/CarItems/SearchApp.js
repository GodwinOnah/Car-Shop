import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import '../../../CSS Files/items.css';
import '../../Navigation/MyNav';
import '../../../CSS Files/nav.css';
import {carProperties} from './carProperties';
import Searcher from './searcher';
import promptQuantity from './quantity';
import CarCards from './Carcards';
import Error from '../../../../ErrorBoundary';
import {AdvertCars} from './Adverts';
import {CarModels} from './CarModels';
import {AdvertMessage} from './AdvertMessage';




import {nav, ul, li,Button, Form, Input,i, span, img,
Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown, Prompt, grid, flex} from 'react-bootstrap';




class SearchApp extends React.Component {


  constructor(props){

    super(props);

    this.state = {

        carP:carProperties,
        carQ:carProperties,
        searchingField:'',
         catQuantity:0
    };

   




  }


   onSearchChange=(e)=>{

   this.setState({searchingField: e.target.value})
    

}


 onCarModelSelect=(e)=>{

   
   this.setState({searchingField: e.target.value}) 

}


  render(){




            const clickCarModelItems = this.state.carP.filter(x=>{ 


            return x.name.toLowerCase().includes(this.state.searchingField.toLowerCase());
           

             

           });

                    

            const SearchCarsItems = this.state.carP.filter(x=>{ 


            return x.name.toLowerCase().includes(this.state.searchingField.toLowerCase())
           || x.price.toString().includes(this.state.searchingField.toLowerCase());

             

           });

            // if(clickCarModelItems.length==0){

            //           alert("Car not in our shop currently");

            //          this.setState({searchingField:''})    
   
                        
            //         }

             
             
            
              return (

                                        <div class="main sub ">

                                       
                                               
                                        <div> <marquee direction="left " class="marquee">
                                        Order any car of your choice by simply clicking to add to cart
                                        </marquee></div>


                                            

                                                <div class="searcher">
                                                
                                               <Searcher theSearch={this.onSearchChange}/>
                                              
                                               </div>


                                              <div class="row">

                                              <div class="col-2 left-container">

                                              <div>
                                   

                                              <h5>Car Model</h5>
                                               <hr/>
                                                
                                              <CarModels onClickModel={this.onCarModelSelect}/>
                                                  <hr/>

                                               <AdvertCars/>

                                              <hr/>
                                                <AdvertMessage/>
                                          
   
                                              </div>

                                              </div>

                                               <div class="col-10 item-container ">
                                                 <CarCards carPropertiesCards={SearchCarsItems} onChangeCatQuantity={this.onChangeCatQuantity}/>
                                                 
                                              </div>
                                              </div>

                                             
                                         </div>

                           );



                 }




}

  export default SearchApp;
