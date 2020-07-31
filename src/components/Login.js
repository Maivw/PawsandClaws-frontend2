import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { Link, Redirect } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from "reactstrap";

import {
	loginAdopter,
	loginShelter,
	loadToken,
} from "../reducers/authentication";

export default function Login(props) {
	const [email, setEmail] = useState("Demo@DemoUser.com");
	const [password, setPassword] = useState("password");

	const token = useSelector((state) => state.authentication.token);
	console.log("TOKEN", token);

	const dispatch = useDispatch();

	const onSubmitLoginFormAdopter = (e) => {
		e.preventDefault();
		dispatch(loginAdopter({ email, password }));
	};
	const onSubmitLoginFormShelter = (e) => {
		e.preventDefault();
		dispatch(loginShelter({ email, password }));
	};

	if (token) {
		return <Redirect to="/" />;
	}

	return (
		<div className="app flex-row align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col md="8">
						<CardGroup>
							<Card className="p-4">
								<CardBody>
									<Form>
										<h1>Login</h1>
										<p className="text-muted">Sign In to your account</p>
										<InputGroup className="mb-3">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="icon-user"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="text"
												placeholder="Username"
												autoComplete="username"
												onChange={(e) => setEmail(e.target.value)}
											/>
										</InputGroup>
										<InputGroup className="mb-4">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="icon-lock"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="password"
												placeholder="Password"
												autoComplete="current-password"
												onChange={(e) => setPassword(e.target.value)}
											/>
										</InputGroup>
										<Row>
											<Button
												color="success"
												block
												onClick={onSubmitLoginFormAdopter}
											>
												Log in as an Adopter
											</Button>
										</Row>
										<br />
										<Row>
											<Button
												color="success"
												block
												onClick={onSubmitLoginFormShelter}
											>
												Log in as an Shelter
											</Button>
										</Row>
									</Form>
								</CardBody>
							</Card>
							<Card
								className="text-white bg-primary py-5 d-md-down-none"
								style={{ width: "44%" }}
							>
								<CardBody className="text-center">
									<div>
										<h2>Sign up</h2>
										<p>If you do not have an account yet,please sign up</p>
										<Link to="/signup">
											<Button
												color="primary"
												className="mt-3"
												active
												tabIndex={-1}
											>
												Register Now!
											</Button>
										</Link>
									</div>
								</CardBody>
							</Card>
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
