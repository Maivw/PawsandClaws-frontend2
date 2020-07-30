import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../index.css";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";

import { logout } from "../reducers/authentication";

export default function Logout(props) {
	const token = useSelector((state) => state.authentication.token);
	let history = useHistory();
	const dispatch = useDispatch();
	const OnLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		history.push("/login");
	};

	return (
		<Button color="success" onClick={OnLogout}>
			success
		</Button>
	);
}
