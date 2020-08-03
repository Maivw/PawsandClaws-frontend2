import React, { useState } from "react";
import Navbar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import PetsListOfShelter from "./PetListOfShelter";
import PetsList from "./PetsList";
import Carousel from "./Carousel";

export default function Home(props) {
	const role = useSelector((state) => state.authentication.user.role);
	const shelterId = useSelector((state) => state.authentication.user.user.id);
	const adopterId = useSelector((state) => state.authentication.user.user.id);
	console.log("rrr", adopterId);
	return (
		<div>
			<Navbar shelterId={shelterId} adopterId={adopterId} />
			<Carousel />
			<PetsList />
		</div>
	);
}

{
	/* /* <NavbarShelter id={shelterId} />
			<PetsListOfShelter id={shelterId} /> */
}
