import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

import { displayAllPetsShelter } from "../reducers/petManagement";

export default function PetsListOfShelter(props) {
	const pets = useSelector((state) => state.petManagement.shelterPets);
	const token = useSelector((state) => state.authentication.token);
	const id = props.match.params.id;
	console.log("check111", id);
	console.log("check112", token);
	console.log("check113", pets);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(displayAllPetsShelter({ id }));
	}, []);

	return (
		<>
			<div>
				<Row className="justify-content-center">
					<Col xl="9" lg="9" md="9" xs="12">
						<Row>
							{pets &&
								pets.map((pet) => {
									return (
										<Col xl="3" lg="3" md="3" xs="12" className="mt-4">
											<Card>
												<CardImg
													top
													width="100%"
													height="400px"
													src={pet.photo}
													alt="Card image cap"
													style={{ objectFit: "cover" }}
												/>
												<CardBody>
													<CardTitle>Name: {pet.petName}</CardTitle>
													<CardSubtitle>Age: {pet.age}</CardSubtitle>
													<CardText>Breed: {pet.Breed.breedName}</CardText>
													<div className="d-flex justify-content-sm-between">
														<Link to={`/pets/${pet.id}`}>
															<Button>Detail</Button>
														</Link>
													</div>
												</CardBody>
											</Card>
										</Col>
									);
								})}
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
}
