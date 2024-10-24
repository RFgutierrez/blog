import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="custom-card">
            <h2 className="section-title">Sobre Mí</h2>
            <div className="text-center mb-4">
              <img 
                src="/profile-placeholder.jpg" 
                alt="Rafael Gutierrez" 
                className="rounded-circle"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <p className="lead">
              Mi nombre es Rafael Gutierrez, soy analista de cumplimiento legal con más de 3 años 
              de experiencia trabajando para RIA Money Transfer, una empresa líder en transacciones 
              monetarias.
            </p>
            <p>
              Durante mi trayectoria profesional, me he especializado en el área de detección de 
              delitos financieros, desarrollando una profunda comprensión de los diferentes tipos 
              de fraudes y estafas que afectan a nuestra comunidad.
            </p>
            <p>
              Mi objetivo con este blog es compartir mi conocimiento y experiencia para ayudar a 
              prevenir a los salvadoreños de los riesgos financieros, educar sobre cómo identificar 
              las estafas más comunes, y proporcionar información clara sobre dónde y cómo denunciar 
              en caso de ser víctimas.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;