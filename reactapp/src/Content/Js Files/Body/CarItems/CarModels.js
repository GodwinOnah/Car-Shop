 import react from 'react'
 import {car} from './AddCarModel'
 import '../../../CSS Files/items.css'





 

 export const CarModels=({onClickModel})=>{


 			let itemList=car.map((item,index)=>{

  				return <li id="carModelList" key={index} >

  				<button  id="carModelButton" value={item} onClick={onClickModel}>{item}</button>

  				</li>
			})
 	


 				return(


 						<div class="carModelList">
 						{itemList}

 						</div>

 					);

 		}



 



