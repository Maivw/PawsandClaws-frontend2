import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signupShelter } from "../../reducers/authentication";
import { showStates } from "../../reducers/inforManagement";
import {
	Button,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import {
	FaUserAlt,
	FaPhoneAlt,
	FaLock,
	FaHome,
	FaCity,
	FaAsterisk,
	FaSun,
} from "react-icons/fa";

export default function SignUpShelter(props) {
	const states = useSelector((state) => state.inforManagement.states);
	const token = useSelector((state) => state.authentication.token);
	console.log("checkkkk", states);
	const dispatch = useDispatch();
	const [inputFields, setInputFields] = useState({
		shelterName: "",
		website: "",
		phoneNume: "",
		email: "",
		address: "",
		city: "",
		state: "",
		zipCode: "",
		password: "",
		confirmPassword: "",
	});

	const onSubmitSignupShelter = (e) => {
		e.preventDefault();
		dispatch(signupShelter({ inputFields }));
	};

	const onChangeInputFields = (e) => {
		e.persist();
		const { name, value } = e.target;
		setInputFields((prev) => ({ ...prev, [name]: e.target.value }));
	};

	useEffect(() => {
		dispatch(showStates());
	}, []);

	const [dropdownOpen, setOpen] = useState(false);

	const toggle = () => setOpen(!dropdownOpen);
	if (token) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<Form>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaUserAlt />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="ShelterName"
						name="shelterName"
						value={inputFields.shelterName}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaAsterisk />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Website URL"
						name="website"
						value={inputFields.website}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaPhoneAlt />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="PhoneNum"
						name="phoneNum"
						value={inputFields.phoneNume}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>@</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Email"
						name="email"
						value={inputFields.email}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaHome />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Address"
						name="address"
						value={inputFields.address}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaCity />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="City"
						name="city"
						value={inputFields.city}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaSun />
						</InputGroupText>
					</InputGroupAddon>
					<Input type="select" name="select" id="select">
						{states.map((st) => {
							return (
								<option key={st.id} value={st.id}>
									{st.stateName}
								</option>
							);
						})}
					</Input>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaSun />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Zip Code"
						name="zipCode"
						value={inputFields.zipCode}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaLock />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="password"
						placeholder="Password"
						name="password"
						value={inputFields.password}
						onChange={onChangeInputFields}
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
						placeholder="Repeat password"
						name="confirmPassword"
						value={inputFields.confirmPassword}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<Button color="success" block onClick={onSubmitSignupShelter}>
					Create Account
				</Button>
			</Form>
		</div>
	);
}
