import React from 'react';
import {AddToCart,CarInfo} from './quantity';
import Tilt from 'react-tilt';
import '../../../CSS Files/nav.css'

const Card=({image,carname,id,addToCart,details,price,onChangeCatQuantity})=>{

       return(

        <div>

            <div class="card">

                  

                    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 300, width: 250 }} >
                        <div className="Tilt-inner" >   </div>
                        <img onClick="" class="card-img-top" src={image}  alt="..."/>
                        </Tilt>

                  

                    
                            <CarInfo carname={carname} id={id} details={details}/>

          
                                 <div>

                                <AddToCart carname={carname} price={price} id={id} onChangeCatQuantity={onChangeCatQuantity}/>
                                

                                </div>



           

    </div>

</div>

       


            );}

       export default Card;