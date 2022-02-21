import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";

export const Card = (entity) => {


    return (<div className="">
        <div className="card m-3" style={{ width: "20rem" }}>
            <img src={entity.url} className="card-img-bottom" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title cardwords">{entity.zero}</h5>
                <p className="cardwords">{entity.first}: {entity.value1}</p>
                <p className="cardwords">{entity.second}: {entity.value2}</p>
                <p className="cardwords">{entity.third}: {entity.value3}</p>
                <Link to={{pathname:"/details/" + entity.name, state: entity}}><button className="cardbtn">DATABANK</button></Link>
            </div>
        </div>
    </div>
    )
}
Card.propTypes = {
    url: propTypes.string,
    zero: propTypes.string,
    first: propTypes.string,
    second: propTypes.string,
    third: propTypes.string,
    value1: propTypes.string,
    value2: propTypes.string,
    value3: propTypes.string,
    name: propTypes.string,
    

}
{/* <Link className="cardbtn1" to={{ pathname: "/characterview/" + person.name, state: person }}>
<button className="cardbtn btn-dark btn-lg">
    DATABANK
</button>
</Link> */}