import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl}/>
            <div className="card--info">
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span className="card--info_location">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--info_title">{props.item.title}</h1>
                <span className="card--info_dates">{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}