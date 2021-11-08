import React,{Component} from 'react'
import Widecard from '../compoonents/Widecard'
import Widecard2 from '../compoonents/Widecard2'


class Education extends Component{


    render(){

        return(

            <div className="condiv">
                <h1 className="subtopic"> My Education</h1>

            <Widecard  title="Computer Engineering" where = " Rajamangala University of technology isan" from="2018" to="Presnt" />
            
            <Widecard2  title="Computer Hardware " where = " Yasothon Technical College" from="2016" to="2018"/>
           
            <Widecard2  title="Technology Computer " where = " Yasothon Technical College" from="2014" to="2016"/>
        
            </div>

        )

    }
}

export default Education;