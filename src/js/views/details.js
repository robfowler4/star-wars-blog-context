import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const Details = (props)  => {
    // const { store, actions } = useContext(Context);
    // const params = useParams();

    const data = props.location.state;

    return (
        <div className="container-fluid pt-5">
            <div className="card mb-3" style={{ maxWidth: "700rem", maxHeight: "700rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.url} style={{ width: "50rem", height: "20rem" }} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.zero}</h5>
                            <p className="card-text">{data.first}: {data.value1}</p>
                            <p className="card-text">{data.second}: {data.value2}</p>
                            <p className="card-text">{data.third}: {data.value3}</p>
                            <Link to="/"><button className="cardbtn">Back Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

