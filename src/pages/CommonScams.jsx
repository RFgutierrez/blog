import { Container, Row, Col, Card } from 'react-bootstrap';

function CommonScams() {
  const scams = [
    {
      title: "Estafa del Premio Falso",
      description: "Te notifican que has ganado un premio pero debes pagar un monto para recibirlo."
    },
    {
      title: "Suplantación de Identidad",
      description: "Criminales se hacen pasar por instituciones bancarias o gubernamentales."
    },
    {
      title: "Estafas Románticas",
      description: "Personas que establecen relaciones falsas para solicitar dinero."
    },
    {
      title: "Inversiones Fraudulentas",
      description: "Esquemas piramidales y otras inversiones que prometen retornos irreales."
    },
    {
      title: "Estafas Telefónicas",
      description: "Llamadas falsas solicitando información personal o pagos inmediatos."
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="section-title">Estafas Más Comunes</h2>
      <Row>
        {scams.map((scam, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Body>
                <Card.Title className="text-aqua">{scam.title}</Card.Title>
                <Card.Text>{scam.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CommonScams;