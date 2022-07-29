import React,{Component} from 'react';
import '../../../CSS Files/items.css';
import {AddToCart,CarInfo} from './quantity';
import MyNav from '../../Navigation/MyNav';
// import {Link } from "react-router-dom";
import CarCards2 from './Carcards2';


 import {carProperties} from './carProperties';




class CarViewCard extends React.Component{ 


  constructor(props){

    super(props);

    this.state = {

        carP:carProperties,
         carId:''
          // carname:'',
           // carImage:''
    //      catQuantity:0
     };

   




  }


  onClickToViewChange=(carId)=>{

   this.setState({carId: carId})
    

}




render(){


    const clickCarViewItems = this.state.carP.filter(x=>{ 


            return x.id===this.state.carId

            // return true;

             

           });

    console.log(this.state.carImage)


   	return(

            <>
            <MyNav/>

        <div id="ViewingCard">

        <h1>Car Item</h1>

            <div id="ViewingCard2">


            <CarCards2 carPropertiesCards={clickCarViewItems}  onChangeCatQuantity={this.onChangeCatQuantity}/>

           {/* <div class="">

                           
                        <img class="card-img-top" src={image}  alt="..."/>
                       
                            <CarInfo carname={carname} id={id} details={details}/>

          
                                 <div>

                                <AddToCart carname={carname} price={price} id={id} onChangeCatQuantity={onChangeCatQuantity}/>
                                

                                </div>


    </div>
       </div>*/}
          </div>
           </div>





       



</>




   		)}}


        export default CarViewCard;