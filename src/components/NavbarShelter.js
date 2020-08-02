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
		<Navbar color="faded" light>
			<NavbarBrand href="/" className="mr-auto ">
				<h1 className="ml-5">PawsAndClaws</h1>
			</NavbarBrand>
			<NavbarToggler onClick={toggleNavbar} className="mr-2" />
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem>
						<NavLink href="/shelters/1">
							<FaUserCheck className="ml-5" />
						</NavLink>
					</NavItem>
					<NavItem>
						<Link to={`/pets/shelters/`}>
							<FaDog className="ml-5" />
						</Link>
					</NavItem>
					<NavItem>
						<Logout />
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}
