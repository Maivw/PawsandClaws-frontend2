import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import AdoptionRequestModal from "./AdoptionRequest";

import { displayAPet } from "../reducers/petManagement";

export default function PetDetail(props) {
	const pet = useSelector((state) => state.petManagement.pet);
	const id = props.match.params.id;
	const [opened, setOpened] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(displayAPet(pet, id));
	}, []);

	const opendReqModal = () => {
		setOpened(true);
	};

	const isClosed = () => {
		setOpened(!opened);
	};

	return (
		<div className="container" style={{ backgroundColor: "yellow" }}>
			<Row>
				<AdoptionRequestModal isOpen={opened} toggle={isClosed} pet={pet} />
				<Col>
					{pet && (
						<Row>
							<Col xl="6" lg="6" md="6" xs="12">
								<img
									src={pet.pet.photo}
									style={{ height: 700, width: "auto", objectFit: "cover" }}
								/>
							</Col>
							<Col xl="6" lg="6" md="6" xs="12">
								<h1>{pet.pet.petName}</h1>
								<div>Age: {pet.pet.age}</div>
								<div>Breed: {pet.pet.Breed.breedName}</div>
								<div>Size: {pet.pet.size}</div>
								<div>Sex: {pet.pet.sex}</div>
								<div>
									IsAdopted: {pet.pet.Breed.isAdopted ? "true" : "false"}
								</div>
								<div>
									Is Okay with Kids: {pet.pet.isOkayKids ? "true" : "false"}
								</div>
								<div>
									Is Okay with other pets:{" "}
									{pet.pet.isOkayPets ? "true" : "false"}
								</div>
								<div>Description: {pet.pet.description}</div>
								<Button className="success" onClick={opendReqModal}>
									Send a message to Shelter
								</Button>
							</Col>
						</Row>
					)}
				</Col>
			</Row>
		</div>
	);
}
