
import React, {Component} from 'react'
import Navitem from './Navitem'


class Navbar extends Component{

constructor(props){
    super(props);

    this.state ={

        'NavItemActive' :''

    }

}


render(){
 
 return(
        <nav>

            <ul>


        <Navitem item="Home" tolink="/" > </Navitem>
        <Navitem item="About" tolink="/about"> </Navitem>
        <Navitem item="Education" tolink="/education"> </Navitem>
        <Navitem item="Skills" tolink="/skills"> </Navitem>
        <Navitem item="Project" tolink="/contact"> </Navitem>

            </ul>

        </nav>

 )

}


}

export default Navbar