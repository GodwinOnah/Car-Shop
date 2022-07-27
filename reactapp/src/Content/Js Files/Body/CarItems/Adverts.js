import React,{Component} from 'react';

import '../../../CSS Files/advert.css'

import {car1gif,car2gif,car3gif,car4gif,car5gif} from '../../../../images/cargifsImages';






export const AdvertCars=()=>{




	
		 

	let carImages=[car1gif,car2gif,car3gif,car4gif,car5gif]; 

		let num=0;

  			 
	

			

  			 setTimeout(function(){


  			 		let num=Math.floor(Math.random()*carImages.length);



  			 		document.getElementById('gif').src=carImages[num];
  			 		
  			 		
				   


											},500);
  			 			
  			


  			 		
  			 
  			 



  			 	return(

						<div>

						<img id="gif" src="" alt="..."/>

						</div>

	

	)};
	