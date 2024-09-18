'use client';

// ** BBootstrap Imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type Props = {
  title?: string;
  text?: string;
  button?: string;
};

const CustomCard = ({ title, text, button }: Props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='https://placehold.co/600x400' />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant='primary'>{button}</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
