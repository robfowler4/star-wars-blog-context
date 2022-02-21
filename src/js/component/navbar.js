import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container1 mb-5">
			<nav className="navbar navbar-dark darknav mb-3 container justify-content-center">
				<div className="">
					<Link to="/">
						<img src="https://images.squarespace-cdn.com/content/v1/5b18735a3917ee20d18a2117/1556809374704-J3HPRL77ONXX6D1BS2YP/unnamed.png?format=1000w" style={{ width: "200px", height: "100px" }} className="card-img-top" alt="..."></img>
					</Link>
				</div>
				
			</nav>
		</div>
	);
};
