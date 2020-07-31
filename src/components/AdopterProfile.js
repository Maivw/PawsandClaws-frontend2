import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
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
			<Container style={{ backgroundColor: "yellow" }}>
				<Col>
					<Row>{adopter.userame}</Row>
					<Row>{adopter.email}</Row>
					<Row>{adopter.firstName}</Row>
					<Row>{adopter.lastName}</Row>
					<Row></Row>
				</Col>
				Your Request:
				<Row>
					<Col xl="2" lg="2" md="2" xs="6">
						Num
					</Col>
					<Col xl="2" lg="2" md="2" xs="6">
						Pet Information
					</Col>
					<Col xl="2" lg="2" md="2" xs="6">
						Shelter Name
					</Col>
					<Col xl="2" lg="2" md="2" xs="6">
						Message
					</Col>
					<Col xl="2" lg="2" md="2" xs="6">
						Send Date
					</Col>
					<Col xl="2" lg="2" md="2" xs="6">
						Is Accepted
					</Col>
				</Row>
				{requests &&
					requests.map((req) => (
						<Row>
							<Col xl="2" lg="2" md="2" xs="6">
								{req.id}
							</Col>
							<Col xl="2" lg="2" md="2" xs="6">
								<Link to={`/pets/${req.Pet.id}`}>{req.Pet.petName}</Link>
							</Col>
							<Col xl="2" lg="2" md="2" xs="6">
								{req.ShelterUser.shelterName}
							</Col>
							<Col xl="2" lg="2" md="2" xs="6">
								{req.message}
							</Col>
							<Col xl="2" lg="2" md="2" xs="6">
								{req.createdAt}
							</Col>
							<Col xl="2" lg="2" md="2" xs="6">
								{req.isAccepted ? "Yes" : "No"}
							</Col>
						</Row>
					))}
			</Container>
		</div>
	);
}
