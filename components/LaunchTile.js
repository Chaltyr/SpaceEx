import React from 'react';
import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';

const backgrounds = [galaxy, iss, moon];
export function getBackgroundImage(id) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

const LaunchTile = ({ rocket }) => {
    const { id, company, country } = rocket;
    return (
        <Link to={`/rocket/${id}`}
        style={{ 
            getBackgroundImage(id)
        }}>

    <h2>{company ? company: ""}</h2>
    <h5>{rocket && rocket.name}</h5>
    <h5>{country}</h5>
        </Link>
    )
}
export default LaunchTile;
