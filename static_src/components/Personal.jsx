import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import about_icon from "./img/about_icon.png";
import learn_icon from "./img/learn_icon.png";
import sup_icon from "./img/sup_icon.png";
import logo from './img/logo.png'
import private_personal from './img/private_personal.png'

export default class Personal extends React.Component {





    render(){
const {visibility,personalShow} = this.props;
        return (
        <div className="personal" style={visibility ? {right:'0'} : {right:'-100%'}}>
            <div className="personal_top">
                <div className="personal_header">
                
                      <p>Меню</p>
                  <span className="close" onClick={ ()=>{personalShow()} } />   
                </div>  
            </div>
            

            

            <div className="linkpersonal">
          <div className="linkList">
            <div className="personal_link">
                        <Link to="/Personalroom" >
                    <img className="personal_icons" src={private_personal}/>
                            <p>Личный кабинет</p>
                        </Link>                                
                    </div>

                    <div className="personal_link">
                        <Link to="/About" >
                    <img className="personal_icons" src={about_icon}/>
                            <p>О приложении</p>
                        </Link>                       
                                
                    </div>

                    <div className="personal_link">    
                        <Link to="/Letstraining" >
                    <img className="personal_icons" src={learn_icon}/>
                             <p> Обучение</p>
                        </Link>
                              
                    </div>          
        
                        
                        
                    <div className="personal_link bottom">
                          <Link to="/Feedback" >
                    <img className="personal_icons" src={sup_icon}/>
                              <p>   Обратная связь</p>
                          </Link>
                              
                    </div>
                </div>
            </div>
        </div>
        );
    }
 }