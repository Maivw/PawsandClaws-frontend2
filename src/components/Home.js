import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./NavBar";
import PetsList from "./PetsList";
import Carousel from "./Carousel";

export default function HomeAdopter(props) {
	const adopter = useSelector((state) => state.authentication.adopter);
	const shelter = useSelector((state) => state.authentication.user);
	return (
		<div>
			<Navbar />
			<Carousel />
			<PetsList />
		</div>
	);
}
