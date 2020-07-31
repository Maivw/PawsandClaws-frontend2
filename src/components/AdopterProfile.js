import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { adopterProfileShowUp } from "../reducers/authentication";
import { displayAllReqsOfAdopters } from "../reducers/inforManagement";

export default function AdopterProfile(props) {
	const token = useSelector((state) => state.authentication.token);
	const id = props.match.params.id;
	const adopter = useSelector((state) => state.authentication.adopter);
	const requests = useSelector((state) => state.inforManagement.requests);
	console.log("adopter", adopter);
	console.log("requests", requests);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(adopterProfileShowUp({ token, id }));
	}, []);
	useEffect(() => {
		const data = {};
		dispatch(displayAllReqsOfAdopters(data, id));
	}, []);

	return (
		<div>
			<div>{adopter.userame}</div>
			<div>{adopter.email}</div>
			<div>{adopter.firstName}</div>
			<div>{adopter.lastName}</div>
			{/* <div>
				{" "}
				Request:
				{adopter.AdoptionRequests &&
					adopter.AdoptionRequests.map((req) => (
						<ul>
							<li>{req.message}</li>
						</ul>
					))}
			</div> */}
		</div>
	);
}
