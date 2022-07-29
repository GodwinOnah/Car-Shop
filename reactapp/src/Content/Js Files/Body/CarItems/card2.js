import React from 'react';
import {AddToCart,CarInfo} from './quantity';
import '../../../CSS Files/nav.css';
import {Link } from "react-router-dom";
import CarViewCard from './CarViewCard'

const Card2=({image,carname,id,addToCart,details,price,onChangeCatQuantity})=>{

   

       return(

        <div>

            <div class="ViewingCard">

                  

                    
                    
                        <img
                        class="card-img-top " src={image}  alt="..."/> 
                    

                       

                  

                    
                            <CarInfo details={details}/>

          
                                 <div>

                                <AddToCart carname={carname} price={price} id={id} onChangeCatQuantity={onChangeCatQuantity}/>
                                

                                </div>



           

    </div>

</div>

       


            );}

       export default Card2;