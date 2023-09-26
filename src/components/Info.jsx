import React from 'react'

export default function Info(props) {
    return (
        <div className="card-container">
            <span className="info">Info</span>
            <img className="round" src={props.item.flag.img} alt="mahan" />
            <h3>{props.item.country}</h3>
            <h6>{props.item.city}</h6>
            <p>{props.item.connection.isp}</p>
            <div className="footer">
                <p>ip: {props.item.ip}</p>
                <p>latitude: {props.item.latitude}</p>
                <p>longitude: {props.item.longitude}</p>
            </div>

        </div>
    )
}
