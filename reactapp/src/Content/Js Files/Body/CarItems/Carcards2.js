import React,{Component} from 'react';
import Card2 from './card2';
import {AddToCart,CarInfo,Quantity} from './quantity'



const CarCards2=({carPropertiesCards,onClickToViewChange,onChangeCatQuantity,})=>{
	


 

     return(

     		<>

     		{
				carPropertiesCards.map((user,i)=>{ 

					


								      	 return (

								      			 	<Card2 
								      			 
								      			 	key={i} 
								      			 	image={carPropertiesCards[i].image} 
								      			 	carname={carPropertiesCards[i].name} 
								      			 	id={carPropertiesCards[i].id}
								      			 	details={carPropertiesCards[i].details} 
								      			 	price={carPropertiesCards[i].price}
								      			 	onClickToViewChange={onClickToViewChange}
								      			 	onChangeCatQuantity={onChangeCatQuantity}
								      			 

								      			 	/>


								      			 	);
								      			})

			}

     		</>

     	);

     


}


export default CarCards2;