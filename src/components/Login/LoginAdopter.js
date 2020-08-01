import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
	Button,
	Container,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from "reactstrap";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { loginAdopter, loginShelter } from "../../reducers/authentication";

export default function LoginAdopter(props) {
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
				<p className="text-muted">
					We're glad you're back. Let's find you a best friend for thick and
					thin. Login below and in no time you'll be walking through the world
					with the perfect pup.
				</p>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaUserAlt />
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
							<FaLock />
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
					<Button color="success" block onClick={onSubmitLoginFormAdopter}>
						Log in as an Adopter
					</Button>
				</Row>
			</Container>
		</div>
	);
}
