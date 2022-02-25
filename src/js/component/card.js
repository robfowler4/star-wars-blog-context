import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = ( data ) => {

    const { store, actions } = useContext(Context);

    const params = useParams();
    const [boolean, setBoolean] = useState(false);

    return (
        <div className="">
            <div className="card m-3" style={{ width: "20rem" }}>
                <img src={data.url} className="card-img-bottom" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title cardwords h5">{data.name}</h5>
                    <p className="cardwords">{data.prop1}: {data.value1}</p>
                    <p className="cardwords">{data.prop2}: {data.value2}</p>
                    <p className="cardwords">{data.prop3}: {data.value3}</p>
                    <p><i className="fa-solid fa-square-heart"></i></p>
                    <div className="d-flex justify-content-between">
                        <div><Link to={`/details/${data.type}/${data.index}`}><button type="button" className="btn cardbtn">DATABANK</button></Link></div>
                        <div><button type="button" className="btn cardbtn" onClick={() => {
                             actions.getFav(data.name);
                             setBoolean(!boolean);
                        }}>{boolean ? <i className="fas fa-heart"/> : <i className="far fa-heart"/>}</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}