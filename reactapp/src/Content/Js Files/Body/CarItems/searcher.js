import React,{Component} from 'react';
import {nav, onChange, ul, li,Button, Form, Input,search} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";


const Searcher=({theSearch})=>{

        return(
                <div>


        
        <input class="form-control me-2" type="search" placeholder="Car search" 
                                aria-label="Search"
                                                onChange={theSearch}/>
    </div>

      );

}


export default Searcher;