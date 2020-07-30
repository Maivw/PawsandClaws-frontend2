import React, { useState } from "react";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	CardBody,
	Container,
	Form,
} from "reactstrap";
import SignUpAdopter from "./SignUpAdopter";
import SignUpShelter from "./SignUpShelter";

export default function SignUp() {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<>
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="9" lg="7" xl="6">
							<Card className="mx-4">
								<CardBody className="p-4">
									<Form>
										<h1>Register</h1>
										<p className="text-muted">Create your account</p>
										<div>
											<Nav tabs>
												<NavItem>
													<NavLink
														onClick={() => {
															toggle("1");
														}}
													>
														As a Shelter
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														onClick={() => {
															toggle("2");
														}}
													>
														As an Adopter
													</NavLink>
												</NavItem>
											</Nav>
											<TabContent activeTab={activeTab}>
												<TabPane tabId="1">
													<Row>
														<Col sm="12">
															<SignUpShelter />
														</Col>
													</Row>
												</TabPane>
												<TabPane tabId="2">
													<Row>
														<Col sm="12">
															<SignUpAdopter />
														</Col>
													</Row>
												</TabPane>
											</TabContent>
										</div>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
