import React from 'react';
import { Card } from 'react-bootstrap';

//import players from '../database/players'
const palyerscart = ({imageURL,name,team,nationality,jerseyNumber,age}) => {

    return (
       
        <Card style={{ width: '18rem', margin: '20px' }} className='' >
        <Card.Img  src={imageURL} alt={name} style={{ width: "50%"}} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
          <Card.Text>
            <strong>Nationality:</strong> {nationality}
          </Card.Text>
          <Card.Text>
            <strong>Jersey Number:</strong> {jerseyNumber}
          </Card.Text>
          <Card.Text>
            <strong>Age:</strong> {age}
          </Card.Text>
        </Card.Body>
      </Card>
     
    );
  };

export default palyerscart;
