import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Report() {
  return (
    <Container className="py-5">
      <h2 className="section-title">¿Cómo Denunciar?</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="custom-card">
            <h3 className="text-aqua mb-4">Instituciones donde Denunciar</h3>
            <ul>
              <li>Policía Nacional Civil: 911</li>
              <li>Fiscalía General de la República: [Número]</li>
              <li>Defensoría del Consumidor: [Número]</li>
              <li>Superintendencia del Sistema Financiero: [Número]</li>
            </ul>

            <h3 className="text-aqua mt-5 mb-4">Formulario de Contacto</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="correo@ejemplo.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de Fraude</Form.Label>
                <Form.Select>
                  <option>Seleccione el tipo de fraude</option>
                  <option>Estafa telefónica</option>
                  <option>Fraude bancario</option>
                  <option>Suplantación de identidad</option>
                  <option>Estafa en línea</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Describa su caso" />
              </Form.Group>

              <Button className="btn-custom" type="submit">
                Enviar Consulta
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Report;