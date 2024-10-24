import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserLock, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import FadeInSection from '../components/FadeInSection';

function Home() {
  return (
    <Container className="py-5">
      <FadeInSection>
        <Row className="mb-5">
          <Col>
            <div className="custom-card text-center">
              <h1 className="display-4 mb-4 text-aqua">
                <FontAwesomeIcon icon={faShieldAlt} className="me-3" />
                Protege tu Dinero
              </h1>
              <p className="lead">
                Información vital para prevenir fraudes y estafas en El Salvador
              </p>
            </div>
          </Col>
        </Row>
      </FadeInSection>

      <Row>
        <Col md={4} className="mb-4">
          <FadeInSection>
            <Card className="custom-card h-100">
              <Card.Body className="d-flex flex-column text-center">
                <FontAwesomeIcon icon={faExclamationTriangle} className="icon-feature" />
                <Card.Title className="text-aqua">Estafas Comunes</Card.Title>
                <Card.Text>
                  Conoce los tipos más frecuentes de fraudes en El Salvador.
                </Card.Text>
                <Link to="/common-scams" className="btn btn-custom mt-auto">Leer más</Link>
              </Card.Body>
            </Card>
          </FadeInSection>
        </Col>

        <Col md={4} className="mb-4">
          <FadeInSection>
            <Card className="custom-card h-100">
              <Card.Body className="d-flex flex-column text-center">
                <FontAwesomeIcon icon={faShieldAlt} className="icon-feature" />
                <Card.Title className="text-aqua">Cómo Prevenirlos</Card.Title>
                <Card.Text>
                  Aprende a identificar y evitar ser víctima de estafas.
                </Card.Text>
                <Link to="/prevention" className="btn btn-custom mt-auto">Leer más</Link>
              </Card.Body>
            </Card>
          </FadeInSection>
        </Col>

        <Col md={4} className="mb-4">
          <FadeInSection>
            <Card className="custom-card h-100">
              <Card.Body className="d-flex flex-column text-center">
                <FontAwesomeIcon icon={faUserLock} className="icon-feature" />
                <Card.Title className="text-aqua">Dónde Denunciar</Card.Title>
                <Card.Text>
                  Guía paso a paso para reportar fraudes financieros.
                </Card.Text>
                <Link to="/report" className="btn btn-custom mt-auto">Leer más</Link>
              </Card.Body>
            </Card>
          </FadeInSection>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;