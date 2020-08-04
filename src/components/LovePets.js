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
	Container,
} from "reactstrap";
import NavBar from "./NavBar";

export default function LovePets(props) {
	const pets = useSelector((state) => state.petManagement.favoritePets);

	return (
		<>
			<div>
				<NavBar />
				<Row className="justify-content-center">
					<Col xl="9" lg="9" md="9" xs="12">
						<Row>
							{pets &&
								pets.map((pet) => {
									return (
										<Col xl="3" lg="3" md="3" xs="12" className="mt-4">
											<Card
												style={{
													borderRadius: 10,
													boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
												}}
												className="card-pet"
											>
												<CardImg
													top
													width="100%"
													height="300px"
													src={pet.photo}
													alt="Card image cap"
													style={{
														objectFit: "cover",
														borderTopLeftRadius: 10,
														borderTopRightRadius: 10,
														boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
													}}
												/>
												<CardBody>
													<CardTitle>
														<p style={{ color: "#1b0c69", fontSize: 16 }}>
															Name:
															<span style={{ fontSize: 25, marginLeft: 5 }}>
																{pet.petName}
															</span>
														</p>
													</CardTitle>
													<CardSubtitle>
														<span style={{ color: "#1b0c69", fontSize: 16 }}>
															Age: {pet.age}
														</span>
													</CardSubtitle>
													<CardText>
														<span style={{ color: "#1b0c69", fontSize: 16 }}>
															Breed: {pet.Breed.breedName}
														</span>
													</CardText>
													<div className="d-flex justify-content-sm-between">
														<Link to={`/pets/${pet.id}`}>
															<Button
																style={{
																	backgroundColor: "#b8adf3",
																	border: "1px solid white",
																}}
															>
																<span style={{ color: "#423295" }}>Detail</span>
															</Button>
															<Button
																style={{
																	backgroundColor: "#b8adf3",
																	border: "1px solid white",
																}}
															>
																<span style={{ color: "#423295" }}>Remove</span>
															</Button>
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
