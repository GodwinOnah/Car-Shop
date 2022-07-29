import React,{Component} from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import '../../../CSS Files/nav.css'


class Car{


        constructor(carname, quantity, price){

            this.carname=carname;
            this.quantity=quantity;
            this.price=price;


        }
     }
           

const carName=({carname})=>{

        return {carname};

}



 const AddToCart=({carname,price,id,onChangeCatQuantity})=>{


    const Prompter=()=>{


        let carIn=[];
   
        let prompter=prompt(" Quantity");

        if(isNaN(prompter)){alert("Only numbers can be use"); return;} 


        if(prompter<1) return;
      

        // document.getElementById('cartQuantity').innerHTML=Number(prompter);


        carIn.push(new Car(carname,prompter,price));

        let s="s",has="have";

        if(prompter<2){s="";has="has"} 
  
         
         alert(prompter+" "+carname+s+" "
             +has+ " been added to your basket successively.\nThanks.");

            onChangeCatQuantity(Number(prompter));



     }

    



                return (


                    <>



                    <button class="add" id={id} onClick={()=>Prompter()}>Buy</button>
                    <div class="push">Price: <span class="pricing">£{price}</span> </div>
                                        
                    </>
                    
);}





const CarInfo=({details})=>{



                return (



                    <div class="details">

                    

                {details}

                             
                    </div>
                    
        );
  

}


const ViewCar=({carname,id,details})=>{




}


const CartQuantity=({quantity})=>{

            return quantity;


}







            

export {AddToCart,CarInfo};    
            







