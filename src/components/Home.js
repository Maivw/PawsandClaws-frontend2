import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./NavBar";
import PetsList from "./PetsList";

export default function Home(props) {
	const adopter = useSelector((state) => state.authentication.adopter);
	const shelter = useSelector((state) => state.authentication.user);
	return (
		<div>
			<Navbar />
			<PetsList />
		</div>
	);
}
