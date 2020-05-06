import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import about_icon from "./img/about_icon.png";
import learn_icon from "./img/learn_icon.png";
import sup_icon from "./img/sup_icon.png";

export default class Personal extends React.Component {

    state={
        
    };

    


    render(){
        return (
        <div className="personal">
            <div className="personal_top">
                <div className="personal_header">
                <div className="feedback_logo">
                <img src="/static/build/69519fabda3ce4c85bbdb40f88f55a21.png" height="50px" width="100px" alt=""/>
            </div>
            <div className="close">X</div>
                </div>  
               <div className="example">
                <b>ivanovivan@example.com</b>
                </div> 
            </div>
            

            

            <div className="linkpersonal">

                    <div className="personal_link">
                        <Link to="/About" >
                              О приложении
                        </Link>                       
                                <img className="personal_icons" src={about_icon}/>
                    </div>

                    <div className="personal_link">    
                        <Link to="/Training" >
                              Обучение
                        </Link>
                              <img className="personal_icons" src={learn_icon}/>
                    </div>          
        
                        
                        
                    <div className="personal_link bottom">
                          <Link to="/Feedback" >
                                 Обратная связь
                          </Link>
                              <img className="personal_icons" src={sup_icon}/>
                    </div>

            </div>
        </div>
        );
    }
 }