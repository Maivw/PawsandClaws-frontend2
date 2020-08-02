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

import { FaHeart } from "react-icons/fa";

import { displayAllPets, favoriteAPet } from "../reducers/petManagement";

export default function PetsList(props) {
	const pets = useSelector((state) => state.petManagement.pets);
	const favPets = useSelector((state) => state.petManagement.favoritePets);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(displayAllPets());
	}, []);

	const likeAPet = (pet) => () => {
		dispatch(favoriteAPet(pet));
	};
	return (
		<>
			<div>
				<Row className="justify-content-center">
					<Col xl="9" lg="9" md="9" xs="12">
						<Row>
							{pets &&
								pets.map((pet) => {
									const fav = favPets.find((f) => f.id === pet.id);
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
														<FaHeart
															style={{
																color: fav ? "red" : "grey",
															}}
															onClick={likeAPet(pet)}
														/>
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
