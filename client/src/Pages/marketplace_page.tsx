// can be accessed by property staff and tenants

import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import TenantSidebar from "../Components/tenant_sidebar";

const MarketplacePage: React.FC = () => {
  const items = [
    { id: 1, title: "Sofa for Sale", price: "₱3,500", seller: "Unit 12B" },
    { id: 2, title: "Math Tutoring Services", price: "₱500/hr", seller: "Unit 5A" },
    { id: 3, title: "Used Bicycle", price: "₱2,000", seller: "Unit 8C" },
  ];

  return (
  <div className = "d-flex">
    <TenantSidebar/>
    <div className = "flex-grow-1">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <a className="navbar-brand fw-bold" href="#">
        Community Marketplace
        </a>
        <div className="ms-auto d-flex align-items-center">
          <button className="btn btn-light btn-sm me-2">🔔 Notifications</button>
          <button className="btn btn-outline-light btn-sm">Logout</button>
        </div>
      </nav>
      <div className="container mt-4">


        <p className="text-muted">Buy, sell, or trade within the community.</p>

        <Row>
          {items.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.seller}</Card.Subtitle>
                  <Card.Text><strong>{item.price}</strong></Card.Text>
                  <Button variant="primary" size="sm">Contact Seller</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </div>

  );
};

export default MarketplacePage;
