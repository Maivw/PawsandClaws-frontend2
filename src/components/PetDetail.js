import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Col,
} from "reactstrap";

import { displayAPet } from "../reducers/petManagement";

export default function PetDetail(props) {
	const pet = useSelector((state) => state.petManagement.pet);
	console.log("props222", props.match.params.id);
	const id = props.match.params.id;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(displayAPet(pet, id));
	});

	return (
		<>
			<div>
				<h1>Hiiii</h1>
			</div>
		</>
	);
}
