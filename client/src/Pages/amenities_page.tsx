// tenants, amenities booking page

import React from "react";
import { Table, Button } from "react-bootstrap";
import TenantSidebar from "../Components/tenant_sidebar";

const AmenitiesPage: React.FC = () => {
  return (

    <div className="d-flex">
        {/* Sidebar */}
        <TenantSidebar/>

      <div className="flex-grow-1">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
            <a className="navbar-brand fw-bold" href="#">
              HOME
            </a>
            <div className="ms-auto d-flex align-items-center">
              <button className="btn btn-light btn-sm me-2">🔔 Notifications</button>
              <button className="btn btn-outline-light btn-sm">Logout</button>
            </div>
          </nav>
  
        <div className="container mt-4">
          <h2>Amenities Booking</h2>
          <p className="text-muted">Reserve facilities</p>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Amenity</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Function Hall</td>
                <td>Available</td>
                <td><Button variant="success" size="sm">Book</Button></td>
              </tr>
              <tr>
                <td>Swimming Pool</td>
                <td>Fully Booked</td>
                <td><Button variant="secondary" size="sm" disabled>Unavailable</Button></td>
              </tr>
              <tr>
                <td>Tennis Court</td>
                <td>Available</td>
                <td><Button variant="success" size="sm">Book</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

    </div>

  );
};

export default AmenitiesPage;
