import { Container, Row, Col, Card } from 'react-bootstrap';

function Prevention() {
  return (
    <Container className="py-5">
      <h2 className="section-title">Medidas de Prevención</h2>
      <Row>
        <Col lg={6} className="mb-4">
          <div className="custom-card">
            <h3 className="text-aqua">Consejos Generales</h3>
            <ul>
              <li>Nunca comparta información personal por teléfono o correo electrónico</li>
              <li>Verifique siempre la identidad de quien solicita información</li>
              <li>No realice transferencias a personas desconocidas</li>
              <li>Mantenga sus contraseñas seguras y únicas</li>
              <li>Desconfíe de ofertas que parezcan demasiado buenas</li>
            </ul>
          </div>
        </Col>
        <Col lg={6} className="mb-4">
          <div className="custom-card">
            <h3 className="text-aqua">Señales de Alerta</h3>
            <ul>
              <li>Presión para actuar inmediatamente</li>
              <li>Solicitudes de pago por métodos no convencionales</li>
              <li>Errores gramaticales en comunicaciones oficiales</li>
              <li>Promesas de ganancias extraordinarias</li>
              <li>Solicitudes de información bancaria sensible</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Prevention;