import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="container1 mb-5">
			<nav className="navbar navbar-dark darknav mb-3 container ">
				<Link to="/">
					<img src="https://images.squarespace-cdn.com/content/v1/5b18735a3917ee20d18a2117/1556809374704-J3HPRL77ONXX6D1BS2YP/unnamed.png?format=1000w" style={{ width: "200px", height: "100px" }} className="card-img-top" alt="..."></img>
				</Link>
				<div className="ml-auto">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle cardbtn" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{store.favorites.map((fav, index) => {
								return (<li key={index}><a className="dropdown-item" href="#">{fav}</a></li>
								)
							})}
						</ul>
					</li>
				</div>
			</nav>
		</div>
	);
};
