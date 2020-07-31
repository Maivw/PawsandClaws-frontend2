import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import PetsList from "./components/PetsList";
import PetDetail from "./components/PetDetail";
import CreateNewPet from "./components/CreateNewPet";
import ShelterProfile from "./components/ShelterProfile";
import AdopterProfile from "./components/AdopterProfile";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Home} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/pets" component={PetsList} />
					<Route exact path="/pets/new" component={CreateNewPet} />
					<Route exact path="/pets/:id" component={PetDetail} />
					<Route exact path="/shelters/:id" component={ShelterProfile} />
					<Route exact path="/adopters/:id" component={AdopterProfile} />
				</Switch>
			</BrowserRouter>
			<div className="cursor"></div>
			<div className="cursor2"></div>
		</>
	);
}

export default App;
