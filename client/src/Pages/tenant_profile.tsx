  // tenants only
import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import TenantSidebar from "../Components/tenant_sidebar";

const TenantProfilePage: React.FC = () => {
  return (

    <div className="d-flex">
        {/* Sidebar */}
        <TenantSidebar/>
      <div className="flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
          <a className="navbar-brand fw-bold" href="#">
            USER PROFILE
          </a>
          <div className="ms-auto d-flex align-items-center">
            <button className="btn btn-light btn-sm me-2">🔔 Notifications</button>
            <button className="btn btn-outline-light btn-sm">Logout</button>
          </div>
        </nav>
        <div className="container mt-4">

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
      </div>
    </div>
  );
};

export default TenantProfilePage;
