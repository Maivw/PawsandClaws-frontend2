import React from "react";
import NavbarShelter from "./NavbarShelter";
import PetsListOfShelter from "./PetListOfShelter";
import PetList from "./PetsList";
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
