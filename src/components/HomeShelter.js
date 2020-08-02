import React from "react";
import NavbarShelter from "./NavbarShelter";
import PetsListOfShelter from "./PetListOfShelter";
import PetsList from "./PetsList";

export default function HomeShelter(props) {
	return (
		<div>
			<NavbarShelter />
			{/* <PetsListOfShelter /> */}
			<PetsList />
		</div>
	);
}
