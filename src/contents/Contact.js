import react,{Component} from 'react'


import ImageSlider from '../compoonents/ImageSlider';
import { SliderData } from '../compoonents/SliderData';
class Contact extends Component{


render(){

return(


<div className="condiv">


<h1 className="subtopic"> Project</h1>


<ImageSlider slides={SliderData} />


</div>

)


}

}

export default Contact