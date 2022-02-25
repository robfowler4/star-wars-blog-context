import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Details = (data) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    const item = store[params.type][params.index];
    console.log(item);
    let array = [];
    
    for (let key in item) {
        let array2 = [];
        array2.push(key, item[key]);
        array.push(array2);
    }
    console.log(array)


    return (
        <div className="container-fluid pt-5">
            <div className="card mb-3" style={{ maxWidth: "700rem", maxHeight: "700rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={params.type == "characters" ? "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768" : "https://lumiere-a.akamaihd.net/v1/images/arvala-7-main_c0f2284a.jpeg?region=164%2C0%2C953%2C536&width=768"} style={{ width: "50rem", height: "20rem" }} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title solid">{item.name}</h5>
                            {array.map((content, index) => {
                                return(
                                <p key={index} className="card-text text-white">{content[0]}: {content[1]}</p>
                                )
                            })}
                            <Link to="/"><button type="button" className="btn cardbtn">Back Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

