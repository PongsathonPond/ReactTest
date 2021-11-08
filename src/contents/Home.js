import React ,{Component} from 'react'
import Social from '../compoonents/Social'
import profilepic from '../img/pro.jpg'
import ReactTypingEffect from 'react-typing-effect'
class Home extends Component{

render(){

    return(

        <div className="condiv home">

        <img src={profilepic} alt="profile" className="profilepic"/>
        
        <ReactTypingEffect  text ={['สวัสดีชาวโลก','Welcome To Portfolio ','By React Js']} speed={50} className="typingeffect" />



        <Social />
        </div>


    )


}



}
export default Home;