import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { shelterProfileShowUp } from "../reducers/authentication";

export default function ShelterProfile(props) {
	const tokenShelter = useSelector(
		(state) => state.authentication.tokenShelter
	);

	console.log("again", tokenShelter);
	const id = props.match.params.id;
	const user = useSelector((state) => state.authentication.user);
	console.log("user", user);

	const dispatch = useDispatch();

	useEffect(async () => {
		dispatch(shelterProfileShowUp({ tokenShelter, id }));
	}, []);

	return (
		<div>
			{user && (
				<div>
					<div>{user.shelterName}</div>
					<div>{user.email}</div>
					<div>{user.website}</div>
					<div>{user.phoneNum}</div>
					<div>{user.address}</div>
					<div>{user.city}</div>
					<div>{user.zipCode}</div>
				</div>
			)}
		</div>
	);
}
