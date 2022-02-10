import React from 'react';
import './Card.css';

export function Card(props: any) {
    const cardFace = props.face;
    const cardShirt = props.shirt;
    return(
        <div className="card-container">
        <div className="card">
            <div className="face">{cardFace}</div>
            <div className="shirt"><span>{cardShirt}</span></div>
        </div>
        </div>
    )
}