import React,{ Component} from 'react'
import Card from '../compoonents/Card'

class Widecard extends Component{

    render(){
        return(




<div className= "Widecard">
<div className="wide-con">
  
<h3>{this.props.title} </h3>
<h4 className="secondtext"> {this.props.where}</h4>
<h4 className="secondtext"> {this.props.from} - {this.props.to}</h4>


</div>

<div className="wide-con1">

<Card/>

</div>





 </div>


        )



    }

}

export default Widecard;