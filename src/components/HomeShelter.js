import React, { useState } from "react";
import NavbarShelter from "./NavbarShelter";
import { useDispatch, useSelector } from "react-redux";
import PetsListOfShelter from "./PetListOfShelter";
import PetsList from "./PetsList";
import Carousel from "./Carousel";

export default function HomeShelter(props) {
	const [id, setState] = useState("");
	return (
		<div>
			<NavbarShelter />
			<Carousel />
			<PetsList />
		</div>
	);
}

{
	/* /* <NavbarShelter id={shelterId} />
			<PetsListOfShelter id={shelterId} /> */
}
