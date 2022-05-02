import React from 'react';
import { Badge, Button } from 'react-bootstrap';
const Cards = ({title, desc, img, techs, link}) => {
    return (
        <div className="card">
            <div className="desc">
                <p>{desc}</p>
                <div className="techs">
                    {techs.map(t => <Badge bg="secondary" key={t}>{t}</Badge>)}
                </div>
                <Button href={link} target="_blank">View</Button>
            </div>
            <h3>{title}</h3>
            <img src={img} alt={desc} />
            <div className="backdrop"></div>
        </div>
    );
}
 
export default Cards;