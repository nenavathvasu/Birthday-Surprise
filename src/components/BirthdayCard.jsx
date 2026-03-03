import React from 'react';
import { Card } from 'react-bootstrap';

const BirthdayCard = ({ wish }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{wish.recipient}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{wish.relationship}</Card.Subtitle>
        <Card.Text>{wish.message}</Card.Text>
        {wish.image && <Card.Img variant="bottom" src={wish.image} />}
      </Card.Body>
    </Card>
  );
};

export default BirthdayCard;