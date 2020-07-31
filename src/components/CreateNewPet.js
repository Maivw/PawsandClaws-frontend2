import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Form,
	FormGroup,
	Input,
	InputGroup,
	Label,
	Button,
} from "reactstrap";

import { postANewPet } from "../reducers/petManagement";
import { showBreeds } from "../reducers/inforManagement";

export default function CreateNewPet(props) {
	const dispatch = useDispatch();
	const breeds = useSelector((state) => state.inforManagement.breeds);
	// const favPets = useSelector((state) => state.petManagement.favoritePets);
	const [fields, setFields] = useState({
		petName: "",
		photo: "",
		breedId: "",
		age: "",
		size: "",
		description: "",
		sex: 1,
		isOkayKids: "True",
		isOkayPets: "True",
		isAdopted: "False",
	});
	console.log("breeds", breeds);
	useEffect(() => {
		dispatch(showBreeds());
	}, []);

	const onSend = (e) => {
		dispatch(postANewPet(fields));
	};
	const changeFields = (e) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="container">
			<Col xs="12" md="9">
				<Card>
					<CardHeader>
						<strong>Add </strong> a new pet
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
									type="text"
									name="petName"
									value={fields.petName}
									placeholder="Pet Name"
									onChange={changeFields}
								/>
							</InputGroup>
							<InputGroup className="mb-3">
								<Input
									type="text"
									name="photo"
									placeholder="Image Url"
									value={fields.photo}
									onChange={changeFields}
								/>
							</InputGroup>
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
								<Input
									type="textarea"
									name="description"
									id="exampleText"
									placeholder="Description"
									value={fields.description}
									onChange={changeFields}
								/>
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
										<Label className="form-check-label" check htmlFor="female">
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
							<InputGroup className="mb-3">
								<Col md="6" lg="6" xl="6" xs="12">
									<Label htmlFor="isAdopted">is adopted</Label>
								</Col>
								<Col md="6" lg="6" xl="6" xs="12">
									<FormGroup check inline>
										<Input
											className="form-check-input"
											type="radio"
											id="yes"
											name="isAdopted"
											value="True"
											checked={fields.isAdopted === "True"}
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
											name="isAdopted"
											value="False"
											checked={fields.isAdopted === "False"}
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
							Add
						</Button>
					</Col>
				</Card>
			</Col>
		</div>
	);
}
