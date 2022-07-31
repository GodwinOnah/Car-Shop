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
import {CarModels,CarPrice} from './CarModels';
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
        price:0,
        model:'model',
         catQuantity:0
    };

   




  }


   onSearchChange=(e)=>{


    e.target.value.toLowerCase()==='all'?
    this.setState({searchingField: ''}) :

   this.setState({searchingField: e.target.value})
    

}

onPriceClick=(e)=>{

   this.setState({price: e.target.value})
    

}

onFilterClick=(model)=>{


   this.setState({mnodel: model})
    

}





  render(){

                    

            var SearchCarsItems = this.state.carP.filter(x=>{ 


            return x.name.toLowerCase().includes(this.state.searchingField.toLowerCase())
            || x.name.toLowerCase()===this.state.searchingField.toLowerCase()
           || x.price.toString().includes(this.state.searchingField.toLowerCase())
           || x.price.toString()===this.state.searchingField.toLowerCase()
           || x.price<this.state.price;

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
                                   

                                              <h6>Filter by:</h6>
                                         
                                              <ul id="modelPick">

                                              <li class="modelPick">
                                              <a onClick={()=>{this.setState({model: 'model'})}}>Model</a>
                                              </li>
                                               <li class="modelPick">
                                              <a onClick={()=>{this.setState({model: 'price'})}}>Price</a>
                                              </li>
                                           
                                              </ul>

                                               <hr/>

                                               {

                                                this.state.model==='model'?
                                                
                                              <CarModels onClickModel={this.onSearchChange}/>

                                              :


                                              <CarPrice onClickModel={this.onPriceClick}/>


                                            }
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
