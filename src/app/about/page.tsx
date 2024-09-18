// ** Bootstrap Imports
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CustomCard from '@/components/CustomCard';

//** Next Imports
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Image src={'https://fakeimg.pl/600x400'} alt={'text'} width={600} height={400} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outline-primary'>Primary</Button>
        </Col>
        <Col>
          <Button variant='outline-secondary'>Secondary</Button>
        </Col>
        <Col>
          <Button variant='outline-success'>Success</Button>
        </Col>
        <Col>
          <Button variant='outline-warning'>Warning</Button>
        </Col>
        <Col>
          <Button variant='outline-danger'>Danger</Button>
        </Col>
        <Col>
          <Button variant='outline-info'>Info</Button>
        </Col>
        <Col>
          <Button variant='outline-light'>Light</Button>
        </Col>
        <Col>
          <Button variant='outline-dark'>Dark</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomCard title={'Hello'} text={'Bla bla bla'} button={'Click'} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
