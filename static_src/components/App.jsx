import React from "react";
import ReactDOM from "react-dom";
import MainScreen from './MainScreen';
import PropTypes from "prop-types";
import style from "./styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MapModule from "./MapModule";
import Welcome from './Welcome';
import PhoneValidation from './PhoneValidation';
import EmailValidation from './EmailValidation';
import logo from "./img/logo.png";
import Training from "./Training";
import Letstraining from "./Letstraining";
import Feedback from "./Feedback";
import Changereg from "./Changereg";
import Emailregistration from "./Emailregistration";
import Changeauto from "./Changeauto";
import Phonereg from "./Phonereg";
import Stream from "./Stream";





export default class App extends React.Component {

	state={
		userID:'5eb3d90369e0e7316090df6f',
	}

render(){
	return( 
		<Router>
	 		<div className='App'>
				<Switch>

					<Route path="/Welcome">
						<Welcome/>
					</Route>

					<Route path="/Changereg">
						<Changereg/>
					</Route>

					<Route path="/Emailregistration">
						<Emailregistration/>
					</Route>

					<Route path="/Changeauto">
						<Changeauto/>
					</Route>

					<Route path="/Phonereg">
						<Phonereg/>
					</Route>
					
					<Route path="/MapModule">
						<MapModule/>
					</Route>

					<Route path="/PhoneValidation">
						<PhoneValidation />
					</Route>					

					<Route path="/EmailValidation">
						<EmailValidation />
					</Route>					

					<Route path="/Training">
						<Training/>
					</Route>

					<Route path="/Letstraining">
						<Letstraining/>
					</Route>


					<Route path="/Feedback">
						<Feedback userID={this.state.userID}/>
					</Route>	

					<Route path="/Stream">
						<Stream/>
					</Route>			
							
					
					<Route path="/">
						<MainScreen />
					</Route>

	
					
				</Switch>
			</div>
	 </Router>
	);	
  }
}