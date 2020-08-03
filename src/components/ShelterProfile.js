import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { shelterProfileShowUp } from "../reducers/authentication";

export default function ShelterProfile(props) {
	const tokenShelter = useSelector(
		(state) => state.authentication.user.tokenShelter
	);

	console.log("again", tokenShelter);
	const user = useSelector((state) => state.authentication.user);
	console.log("idddddd", user);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(shelterProfileShowUp({ id: user.id }));
	}, []);

	return (
		<div>
			{user && (
				<div>
					<div>{user.shelterName}</div>
					<div>{user.email}</div>
					<div>{user.website}</div>
					<div>{user.phoneNum}</div>
					<div>{user.address}</div>
					<div>{user.city}</div>
					<div>{user.zipCode}</div>
				</div>
			)}
		</div>
	);
}
