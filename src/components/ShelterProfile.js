import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { Link, Redirect } from "react-router-dom";
import {
	Button,
} from "reactstrap";

import {
	loginAdopter,
	loginShelter,
	loadToken,
} from "../reducers/authentication";

export default function Login(props) {
	const [email, setEmail] = useState("Demo@DemoUser.com");
	const [password, setPassword] = useState("password");

	const token = useSelector((state) => state.authentication.token);
	console.log("TOKEN", token);

	const dispatch = useDispatch();

	const onSubmitLoginFormAdopter = (e) => {
		e.preventDefault();
		dispatch(loginAdopter({ email, password }));
	};
	const onSubmitLoginFormShelter = (e) => {
		e.preventDefault();
		dispatch(loginShelter({ email, password }));
	};

	if (token) {
		return <Redirect to="/" />;
	}

	return ()
