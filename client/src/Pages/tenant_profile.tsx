// tenants only
import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const TenantProfilePage: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>My Profile & Documents</h2>

      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Form.Group controlId="tenantName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value="Juan Dela Cruz" readOnly />
            </Form.Group>

            <Form.Group controlId="tenantUnit" className="mb-3">
              <Form.Label>Unit</Form.Label>
              <Form.Control type="text" value="Unit 7A" readOnly />
            </Form.Group>

            <Form.Group controlId="tenantEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value="juan@email.com" />
            </Form.Group>

            <Button variant="primary">Update Profile</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h5>Lease Documents</h5>
          <Button variant="outline-secondary" size="sm" className="me-2">Download Lease Contract</Button>
          <Button variant="outline-secondary" size="sm">Download Billing History</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TenantProfilePage;
