import React,{Component} from 'react';

import Tilt from 'react-tilt';

import image1 from './images'





const Logo=()=>{return(

	<div>

<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 500, width: 250 }} >
 <div className="Tilt-inner" style={{ marginTop: 100, marginLeft: 100}}> <img style={{ height:200, width:200}} src={image1} alt="..."/></div>
</Tilt>
	</div>



)}


export default Logo;