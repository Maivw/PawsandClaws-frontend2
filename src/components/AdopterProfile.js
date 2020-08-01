import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";
import { adopterProfileShowUp } from "../reducers/authentication";
import { displayAllReqsOfAdopters } from "../reducers/inforManagement";

export default function AdopterProfile(props) {
	const token = useSelector((state) => state.authentication.token);
	const id = props.match.params.id;
	const adopter = useSelector((state) => state.authentication.adopter);
	const requests = useSelector((state) => state.inforManagement.requests);

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
			<Container style={{ backgroundColor: "" }}>
				{adopter && (
					<Col>
						<Row>{adopter.username}</Row>
						<Row>{adopter.email}</Row>
						<Row>{adopter.firstName}</Row>
						<Row>{adopter.lastName}</Row>
					</Col>
				)}
				Your Request:
				<Table bordered>
					<thead>
						<tr xl="2" lg="2" md="2" xs="6">
							<th>#</th>
							<th>Pet Information</th>
							<th>Shelter Name</th>
							<th>Message</th>
							<th>Send Date</th>
							<th>Is Accepted</th>
						</tr>
					</thead>
					<tbody>
						{requests &&
							requests.map((req, i) => (
								<tr xl="2" lg="2" md="2" xs="6" key={i}>
									<th scope="row">{i + 1}</th>
									<td>{req.Pet.petName}</td>
									<td>{req.ShelterUser.shelterName}</td>
									<td>{req.message}</td>
									<td>{req.createdAt}</td>
									<td>{req.isAccepted ? "Yes" : "No"}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
}
