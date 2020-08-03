import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { shelterProfileShowUp } from "../reducers/authentication";

export default function ShelterProfile(props) {
	const { id } = useParams();

	const user = useSelector((state) => state.authentication.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(shelterProfileShowUp({ id }));
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
