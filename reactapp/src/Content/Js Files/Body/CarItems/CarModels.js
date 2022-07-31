 import react from 'react'
 import {car} from './AddCarModel'
 import '../../../CSS Files/items.css'





 

 const CarModels=({onClickModel})=>{


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

        const CarPrice=({onClickModel})=>{

            let str='< £';

            let priceList=[1000,20000,40000,60000,80000,100000,200000,500000,1000000,5000000,10000000,500000000,1000000000]


            let itemList=priceList.map((item,index)=>{

                return <li id="carModelList" key={index} >

                <button  id="carModelButton" value={item} onClick={onClickModel}>{str}{item}</button>

                </li>
            })
    


                return(


                        <div class="carModelList">

                        {itemList}

                        </div>

                    );

        }



 export{CarModels,CarPrice};



