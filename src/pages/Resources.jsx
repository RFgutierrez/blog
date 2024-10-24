import { Container, Row, Col, Card } from 'react-bootstrap';

function Resources() {
  return (
    <Container className="py-5">
      <h2 className="section-title">Recursos Útiles</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Body>
              <Card.Title className="text-aqua">Enlaces Importantes</Card.Title>
              <ul>
                <li><a href="#" className="text-aqua">Policía Nacional Civil</a></li>
                <li><a href="#" className="text-aqua">Fiscalía General de la República</a></li>
                <li><a href="#" className="text-aqua">Defensoría del Consumidor</a></li>
                <li><a href="#" className="text-aqua">Superintendencia del Sistema Financiero</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Body>
              <Card.Title className="text-aqua">Documentos y Guías</Card.Title>
              <ul>
                <li>Guía de prevención de fraudes</li>
                <li>Manual de seguridad financiera</li>
                <li>Formato de denuncia</li>
                <li>Preguntas frecuentes</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resources;