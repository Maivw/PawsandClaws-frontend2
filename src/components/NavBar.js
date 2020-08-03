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
import { FaHeart, FaUserCheck, FaDog } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";

export default function NavBar(props) {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color="faded " light className="color-nav mt-2 w-100">
				<NavbarBrand href="/" className="mr-auto ">
					<h1 className="ml-5" style={{ color: "white" }}>
						PawsAndClaws
					</h1>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<Link href="/adopters/1" className="nav-item">
								<FaUserCheck className="ml-5" />
							</Link>
						</NavItem>
						<NavItem className="nav-item">
							<FaHeart className="ml-5" />
						</NavItem>
						<NavItem className="nav-item">
							<Logout />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
