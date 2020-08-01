// http://collectui.com/designers/owltastic/form

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
	Card,
	CardBody,
	CardHeader,
	Form,
	FormGroup,
	Input,
	InputGroup,
	Label,
	Button,
	CardImg,
	CardText,
	CardTitle,
	CardSubtitle,
	Row,
	Col,
} from "reactstrap";

import { createPrefPetForm, showBreeds } from "../reducers/inforManagement";
import { displayAllPets, favoriteAPet } from "../reducers/petManagement";
import { MatchPets } from "./Utils";
import { FaHeart } from "react-icons/fa";

export default function PetPrefs(props) {
	const dispatch = useDispatch();
	const pets = useSelector((state) => state.petManagement.pets);
	const breeds = useSelector((state) => state.inforManagement.breeds);
	const prefPet = useSelector((state) => state.inforManagement.pet);
	const favPets = useSelector((state) => state.petManagement.favoritePets);
	console.log("pppp", prefPet);
	console.log("all Pets", pets);
	const [fields, setFields] = useState({
		breedId: "",
		age: "",
		sex: 1,
		size: "",
		isOkayKids: "True",
		isOkayPets: "True",
	});
	useEffect(() => {
		dispatch(showBreeds());
	}, []);
	useEffect(() => {
		dispatch(displayAllPets());
	}, []);

	const onSend = (e) => {
		dispatch(createPrefPetForm(fields));
	};
	const changeFields = (e) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};
	const likeAPet = (pet) => () => {
		dispatch(favoriteAPet(pet));
	};

	return (
		<div className="container mt-5">
			<Row>
				<Col xs="12" md="4">
					<Card>
						<CardHeader>
							<h2>Find the right dog for you</h2>
						</CardHeader>
						<CardBody>
							<Form
								action=""
								method="post"
								encType="multipart/form-data"
								className="form-horizontal"
							>
								<InputGroup className="mb-3">
									<Input
										type="select"
										name="breedId"
										placeholder="breed"
										value={fields.breedId}
										onChange={changeFields}
									>
										<option>Breed</option>
										{breeds &&
											breeds.map((b) => {
												return (
													<option key={b.id} value={b.id}>
														{b.breedName}
													</option>
												);
											})}
									</Input>
								</InputGroup>
								<InputGroup className="mb-3">
									<Input
										type="select"
										name="age"
										placeholder="Age"
										value={fields.age}
										onChange={changeFields}
									>
										<option>Age</option>
										<option value="1">Puppy (0-1)</option>
										<option value="2">Young (1-3</option>
										<option value="3">Middle Aged (3-7)</option>
										<option value="4">Adult (7-10)</option>
										<option value="5">Mature (10+)</option>
									</Input>
								</InputGroup>
								<InputGroup className="mb-3">
									<Input
										type="select"
										name="size"
										placeholder="Size"
										value={fields.size}
										onChange={changeFields}
									>
										<option>Size</option>
										<option value="1">Toy</option>
										<option value="2">Small</option>
										<option value="3">Medium</option>
										<option value="4">Large</option>
										<option value="5">X-large</option>
									</Input>
								</InputGroup>
								<InputGroup className="mb-3">
									<Col md="6" lg="6" xl="6" xs="12">
										<Label htmlFor="sex">Sex</Label>
									</Col>
									<Col md="6" lg="6" xl="6" xs="12">
										<FormGroup check inline>
											<Input
												className="form-check-input"
												type="radio"
												id="male"
												name="sex"
												value="1"
												checked={fields.sex === "1"}
												onChange={changeFields}
											/>
											<Label className="form-check-label" check htmlFor="male">
												Male
											</Label>
										</FormGroup>
										<FormGroup check inline>
											<Input
												className="form-check-input"
												type="radio"
												id="female"
												name="sex"
												value="2"
												checked={fields.sex === "2"}
												onChange={changeFields}
											/>
											<Label
												className="form-check-label"
												check
												htmlFor="female"
											>
												Female
											</Label>
										</FormGroup>
									</Col>
								</InputGroup>
								<InputGroup className="mb-3">
									<Col md="6" lg="6" xl="6" xs="12">
										<Label htmlFor="isOkayKid">is Okay with Kids</Label>
									</Col>
									<Col md="6" lg="6" xl="6" xs="12">
										<FormGroup check inline>
											<Input
												className="form-check-input"
												type="radio"
												id="yes"
												name="isOkayKid"
												value="True"
												checked={fields.isOkayKids === "True"}
												onChange={changeFields}
											/>
											<Label className="form-check-label" check htmlFor="yes">
												Yes
											</Label>
										</FormGroup>
										<FormGroup check inline>
											<Input
												className="form-check-input"
												type="radio"
												id="no"
												name="isOkayKid"
												value="False"
												checked={fields.isOkayKids === "False"}
												onChange={changeFields}
											/>
											<Label className="form-check-label" check htmlFor="no">
												No
											</Label>
										</FormGroup>
									</Col>
								</InputGroup>
								<InputGroup className="mb-3">
									<Col md="6" lg="6" xl="6" xs="12">
										<Label htmlFor="isOkayPets">is Okay with other pets</Label>
									</Col>
									<Col md="6" lg="6" xl="6" xs="12">
										<FormGroup check inline>
											<Input
												className="form-check-input"
												type="radio"
												id="yes"
												name="isOkayPets"
												value="True"
												checked={fields.isOkayPets === "True"}
												onChange={changeFields}
											/>
											<Label className="form-check-label" check htmlFor="yes">
												Yes
											</Label>
										</FormGroup>
										<FormGroup check inline>
											<Input
												className="form-check-input"
												type="radio"
												id="no"
												name="isOkayPets"
												value="False"
												checked={fields.isOkayPets === "False"}
												onChange={changeFields}
											/>
											<Label className="form-check-label" check htmlFor="no">
												No
											</Label>
										</FormGroup>
									</Col>
								</InputGroup>
							</Form>
						</CardBody>
						<Col className="d-flex justify-content-sm-end mb-3">
							<Button color="success" onClick={onSend}>
								Find
							</Button>
						</Col>
					</Card>
				</Col>
				<Col xs="12" md="8">
					{MatchPets(pets, prefPet).map((p) => console.log(p.petName))}
					<Row>
						{MatchPets(pets, prefPet).map((pet) => {
							const fav = favPets.find((f) => f.id === pet.id);
							return (
								<Col xl="6" lg="6" md="6" xs="12" className="mt-4">
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
	);
}
