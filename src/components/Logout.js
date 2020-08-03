import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../index.css";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { FaUserAltSlash } from "react-icons/fa";

import { logout } from "../reducers/authentication";

export default function Logout(props) {
	// const token = useSelector((state) => state.authentication.token);
	// const tokenShelter = useSelector(
	// 	(state) => state.authentication.user.tokenShelter
	// );
	let history = useHistory();
	const dispatch = useDispatch();
	const OnLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		history.push("/login");
	};

	return <FaUserAltSlash className="ml-5" onClick={OnLogout} />;
}
