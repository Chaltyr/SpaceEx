import React from 'react';
import styled from '@emotion/core';
import { getBackgroundImage } from './LaunchTile';


const RocketDetail = () => ({id, name, country }) =>(
    <Card
    style={{
      backgroundImage: getBackgroundImage(id),
    }}
  >
    <h3>
      {rocket && rocket.name} ({rocket && country})
    </h3>
    <h5>{id}</h5>
  </Card>
);

const Card = styled('div')({
    height: 365,
    marginBottom: unit * 4,
  });

  export default RocketDetail;
