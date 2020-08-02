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
import { loginShelter } from "../../reducers/authentication";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function LoginShelter(props) {
	const [email, setEmail] = useState("Demo@DemoUser.com");
	const [password, setPassword] = useState("password");

	const tokenShelter = useSelector(
		(state) => state.authentication.tokenShelter
	);

	const dispatch = useDispatch();

	const onSubmitLoginFormShelter = (e) => {
		e.preventDefault();
		dispatch(loginShelter({ email, password }));
	};

	if (tokenShelter) {
		return <Redirect to="/homeShelter" />;
	}

	return (
		<div className="app flex-row align-items-center">
			<Container>
				<p>
					Welcome back! Thanks for all your hard work. We appreciate you placing
					so many lovable dogs. We'd love for you to let us do our part to help
					you along.
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
					<Button color="success" block onClick={onSubmitLoginFormShelter}>
						Log in as a Shelter
					</Button>
				</Row>
			</Container>
		</div>
	);
}
