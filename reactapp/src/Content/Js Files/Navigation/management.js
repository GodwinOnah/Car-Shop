import React,{Component} from 'react';
import '../../CSS Files/nav.css';
import MyNav from './MyNav';
import MyFooter from '../Footer/footer.js';

export const Management =()=>{

return(

			<>

			<MyNav/>

			<div id="maintenance">

			

			<h1>Office of The MD</h1>

			<p>The Managing Director(MD)is the over all controller of the daily planning and organisation of the company affairs.
			Some of his/her services includes:</p>

			<ul>

			<li>
			Overseer

			</li>

			<li>
			Handling of new brances
			</li>

			<li>
			Takes the final decision
			</li>
			</ul>
			

			<h1>Office of The Manage</h1>
			<p>The manager is reponsible for the plan of actions to be executed in the company. Complaints that can be handled by the manager
			includes:</p>

			<ul>

			<li>
			Fake products

			</li>

			<li>
			Big cash transactions
			</li>

			<li>
			Welcoming of prestigious visitors and customers
			</li>

			<li>
			Handling of staff misunderstanding
			</li>

			<li>
			Handling of customer issues and complaints
			</li>

			</ul>


			<h3>Contact us today</h3>


Call us on : <span >07751776483</span>





			</div>

			<MyFooter/>
</>

	)


}