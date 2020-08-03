import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import Logout from "./Logout";
import { FaUserCheck, FaDog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBarShelter(props) {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<Navbar color="faded" light className="color-nav mt-2">
			<NavbarBrand href="/" className="mr-auto ">
				<h1 className="ml-5" style={{ color: "white" }}>
					PawsAndClaws
				</h1>
			</NavbarBrand>
			<NavbarToggler onClick={toggleNavbar} className="mr-2" />
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem>
						<Link href="/shelters/1" className="nav-item">
							<FaUserCheck className="ml-5" />
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`/pets/shelters/`} className="nav-item">
							<FaDog className="ml-5" />
						</Link>
					</NavItem>
					<NavItem className="nav-item">
						<Logout />
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}
