import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import '../../../CSS Files/index.css';
import MyNav from '../../Navigation/MyNav.js';
import MyFooter from '../../Footer/footer.js';
import SearchApp from './SearchApp';
import LoginPage from '../../../../Authentication/loginpage';
import SignupPage from '../../../../Authentication/signuppage'




class Main extends React.Component {


  constructor(props){

    super(props);

    this.state = {


        login:'home',

        isLogin:true,

        view:'main',

         catQuantity:0

    };

  }



  // componentDidMount(){
  //               fetch('http://localhost:3001/').then(response=>response.json())
  //               .then(console.log)
  // }





  onLogoutClick =({page})=>{

                     this.setState({login:page});
                    
                  }


 onIsLoginCheck =({isLogin})=>{



                     this.setState({isLogin:!isLogin});
                    
                  }



    onCarViewClick =({view})=>{

                     this.setState({view:view});

    }

onChangeCatQuantity =(quantity)=>{

      let sum=0;

      sum+=quantity;

    this.setState({catQuantity: sum})}

  render(){


                return(

              	<div>

                 <MyNav />

                
             	 
                <SearchApp/>
               

              
             <MyFooter/>

            </div>


)}

}


export default Main;