// COMPANY ADMIN ONLY

import React from "react";
import CompanyAdminNavBar from "../Components/company_admin_navbar.tsx";

const PropertiesOverview: React.FC = () => {
  const properties = [
    { name: "Residence 1", location: "Pasay", units: 250, manager: "John D.", tickets: 35, rate: "97%", status: "Active" },
    { name: "Residence 2", location: "Pasig", units: 200, manager: "John D.", tickets: 20, rate: "95%", status: "Active" },
    { name: "Residence 3", location: "Manila", units: 450, manager: "John D.", tickets: 34, rate: "89%", status: "Active" },
    { name: "Residence 4", location: "Cebu", units: 250, manager: "John D.", tickets: 32, rate: "94%", status: "Active" },
    { name: "Residence 5", location: "Makati", units: 400, manager: "John D.", tickets: 12, rate: "99%", status: "Active" },
    { name: "Residence 6", location: "Cainta", units: 200, manager: "John D.", tickets: 23, rate: "93%", status: "Active" },
    { name: "Residence 7", location: "Taguig", units: 300, manager: "John D.", tickets: 34, rate: "98%", status: "Active" },
    { name: "Residence 8", location: "Paranaque", units: 250, manager: "John D.", tickets: 54, rate: "92%", status: "Active" },
    { name: "Residence 9", location: "Valenzuela", units: 250, manager: "John D.", tickets: 33, rate: "85%", status: "Active" },
    { name: "Residence 10", location: "Pateros", units: 240, manager: "John D.", tickets: 53, rate: "93%", status: "Active" },
    { name: "Residence 11", location: "Malabon", units: 250, manager: "John D.", tickets: 38, rate: "87%", status: "Active" },
    { name: "Residence 12", location: "Mandaluyong", units: 200, manager: "John D.", tickets: 29, rate: "97%", status: "Active" },
    { name: "Residence 13", location: "Marikina", units: 350, manager: "John D.", tickets: 43, rate: "96%", status: "Active" },
    { name: "Residence 14", location: "Antipolo", units: 300, manager: "John D.", tickets: 26, rate: "94%", status: "Active" },
    { name: "Residence 15", location: "Bulacan", units: 250, manager: "John D.", tickets: 12, rate: "92%", status: "Active" },
  ];

  return (
    <div>
      {/* Main Content */}
      <CompanyAdminNavBar/>
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-success">Add Property</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Property</th>
                <th>Location</th>
                <th>Units</th>
                <th>Manager</th>
                <th>Open Tickets</th>
                <th>Collection Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {/* map iterates over the properties array and return a <tr> for each object,
                with <td> cells for each property field */}
              {properties.map((p, index) => ( 
                <tr key={index}>
                  <td>{p.name}</td>
                  <td>{p.location}</td>
                  <td>{p.units}</td>
                  <td>{p.manager}</td>
                  <td>{p.tickets}</td>
                  <td>{p.rate}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertiesOverview;
