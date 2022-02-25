import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";




//create two array for characters and planets
//create reusable card component
//creat a maping fuction to map through the arrays to make a card with each character and planet

export const Home = () => {
	const { store, actions } = useContext(Context);

	// const [character, setCharacter] = React.useState([]);

	// const [planets, setPlanets] = React.useState([]);

	// useEffect(() => {
	// 	getFetch("https://swapi.dev/api/people/", setCharacter);
	// 	getFetch("https://swapi.dev/api/planets", setPlanets);
	// 	// getFetchPlanets();
	// }, []);

	// const getFetch = (url, setter) => {
	// 	fetch(url)
	// 		.then((response) => {
	// 			if (!response.ok) {
	// 				throw Error(response.statusText);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			console.log("data", data);
	// 			setter(data.results);
	// 		})
	// 		.catch((error) => {
	// 			console.log("error", error);
	// 		});
	// }





	return (
		<div className="container graydiv">
			<h1 className="h1home ps-4">Planets</h1>
			<div className="planets">
				<div className="card1">
					{store.planets.map((planet, i) => {
						return <Card 
						url="https://lumiere-a.akamaihd.net/v1/images/arvala-7-main_c0f2284a.jpeg?region=164%2C0%2C953%2C536&width=768" 
						prop1="Rotation-Period" value1={planet.rotation_period}
						prop2="Diameter" value2={planet.diameter}
						prop3="Orbital-Period" value3={planet.orbital_period}
						key={i}
						index={i}
						type="planets"
						name={planet.name}
						/>
					})}
				</div>
			</div>
			<h1 className="h1home ps-4">Characters</h1>
			<div className="characters">
				<div className="card1">
					{store.characters.map((character, i) => {
						return <Card
						url="https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768"
						prop1="Hair-Color" value1={character.hair_color}
						prop2="Mass" value2={character.mass}
						prop3="Height" value3={character.height}
						key={i}
						index={i}
						type="characters"
						name={character.name}
						/>
					})}
				</div>
			</div>
		</div>)
};


// url="https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768"
// url="https://lumiere-a.akamaihd.net/v1/images/arvala-7-main_c0f2284a.jpeg?region=164%2C0%2C953%2C536&width=768" 