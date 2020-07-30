import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { sendAdoptionRequest } from "../reducers/inforManagement";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
} from "reactstrap";

export default function AdoptionRequestModal(props) {
	const { isOpen, pet } = props;
	const token = useSelector((state) => state.authentication.token);

	const dispatch = useDispatch();

	const [message, setMessage] = useState("");
	const onChangeMessage = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const onSend = (e) => {
		e.preventDefault();
		/**
		 * petId, shelterId, message, isAccepted
		 */
		const data = {
			petId: pet.pet.id,
			shelterId: pet.pet.shelterId,
			message: message,
			isAccepted: true,
		};
		dispatch(sendAdoptionRequest(data));
		toggleModal();
	};

	const toggleModal = () => {
		props.toggle(!isOpen);
	};
	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>Messge</ModalHeader>
				<ModalBody>
					<Input
						type="textarea"
						name="text"
						id="exampleText"
						onChange={onChangeMessage}
					/>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggleModal} onClick={onSend}>
						Send
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
