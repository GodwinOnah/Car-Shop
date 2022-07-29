import React,{Component} from 'react';

export const Rent=({carname,rent,id,onChangeCatQuantity})=>{

	let pounds="£",pricing="Price: ";



	if(rent<1){

		pounds="";
		pricing="";

		rent ="Not available"

		// document.querySelector('pricing').style.color='red';

		}

	return(


                   <>



                    <button class="add" id={id} onClick="">Rent/hr</button>
                    <div class="push">{pricing}<span class="pricing">{pounds}{rent}</span> </div>
                                        
                    </>

		)
}