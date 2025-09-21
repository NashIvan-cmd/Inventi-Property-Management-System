// tenants, amenities booking page

import React from "react";
import { Table, Button } from "react-bootstrap";

const AmenitiesPage: React.FC = () => {
  return (
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
  );
};

export default AmenitiesPage;
