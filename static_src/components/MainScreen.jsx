import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import logo from "./img/logo.png";
import {Link} from "react-router-dom"
import axios from "axios";

export default class MainScreen extends React.Component{


loaddingRedirect = () => {
setTimeout( ()=>{
window.location="/Welcome";
},3000) 
};

dataFetch = () => {
/*
//здесь будет выполняться проверка авторизации 
//пользователя(server/cookies на наше усмотрение)
*/	
}



render(){
	this.loaddingRedirect();
	return (
	<div className='mainScreen' >
	<div className="logo"><p>Park</p><div className="switch"><p className="circleText">ON</p><span className="switchCircle"></span></div></div>
		</div>
	);
  }
}