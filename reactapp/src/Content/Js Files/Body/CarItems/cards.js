import React from 'react';
import {AddToCart,CarInfo} from './quantity';
import Tilt from 'react-tilt';
import '../../../CSS Files/nav.css';
import {Link } from "react-router-dom";
import CarViewCard from './CarViewCard';
import {Rent} from './rent'

const Card=({image,carname,id,addToCart,details,price,rent,onClickToViewChange,onChangeCatQuantity})=>{

   

       return(

        <div>

            <div class="card">

                  

                    
                    <Tilt  className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 180, width: 250 }} >
                        <div className="Tilt-inner" >   </div>
                        <Link to='/CarViewCard'  ><img onClick={()=>onClickToViewChange(id)}
                        class="card-img-top" src={image}  alt="..."/> </Link>
                        </Tilt>

                       
                            <span id="carnaming">{carname}</span>
                  

                    
                            <CarInfo details={details}/>

          
                              
                              
                                 <div class="row">

                                <div class="col-6 buy">
                                <AddToCart carname={carname} price={price} id={id} onChangeCatQuantity={onChangeCatQuantity}/>
                                </div> 

                                <div class="col-6 rent">
                                <Rent carname={carname} rent={rent} id={id} onChangeCatQuantity={onChangeCatQuantity}/>
                                 </div> 
                                
                                     

                                </div>



           

    </div>

</div>

       


            );}

       export default Card;