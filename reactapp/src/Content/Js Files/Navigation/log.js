
import React,{Component} from 'react';


export const Log=({onLogoutClick,state})=>{

               if(state===false){

      document.getElementById('open-modal').innerHTML="Logout";


  }

		return(

				<div>

			 	<li class="nav-item navItems">   
                          <button onClick={()=>onLogoutClick('login')} class="submitbtn log" id="open-modal" type="submit">Login</button>
                </li>

                </div>

		)

	}

	




	