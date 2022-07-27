import React,{Component} from 'react';

class Error extends Component {


  constructor(props){

    super(props)

    this.state = {

        Error:false


    };


  }


  componentDidMount(error,info){

  		this.setState({Error:true})

  }

  render(){


  	if(this.state.Error){

  		return <h1> Ooooooops! Something is wrong</h1>
  	}

  	return this.props.children;

  }

}

export default Error;