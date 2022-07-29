import React,{Component} from 'react';
import '../../CSS Files/nav.css';
import MyNav from './MyNav';
import MyFooter from '../Footer/footer.js';

export const About=()=>{

return(

			<>

			<MyNav/>

			<div id="maintenance">

			

			<h1>ABOUT US</h1>

			<h3>Operartion</h3>

			<p>The company is solely un the the MD, Mr Onah GOdwin Obande. A graduate of Software development, University of Glasgow.
			It has managers in various departments in the company. Shift leads handles the affair of sales, rentals, and maintennace and give a daily report 
			of acticvities to the manager.</p>
			<p>It is usaully opened for action from monday to Friday, 6:00am to 10:30pm</p>

				<h3>Location</h3>
				<p>It is located at G31 2NL, Dennistound, Glasgow, Nort Larnakshire, United Kingdom.</p>


			

			<h3>Any complain?</h3>


			Call us on : <span >07751776483</span>

			</div>



		

			<MyFooter/>
</>

	)


}