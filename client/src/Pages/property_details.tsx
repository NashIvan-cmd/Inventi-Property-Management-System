//for company admins only, runs when property row is clicked in properties overview

// src/Pages/PropertyDetails.tsx
import React, { useState } from "react";

const PropertyDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tenants" | "departments" | "property_manager">(
    "property_manager"
  );

  // Mock property manager
  const propertyManager = {
    name: "Alfredo Venturina",
    contact: "alfredoventurina@gmail.com",
    assignmentDate: "2025-09-27",
    address: "somewhere over the rainbow, Pasig city",
  }
  // Mock property info
  const property = {
    name: "GreenView Condominiums",
    type: "Residential",
    address: "123 Main Street, Cityville",
    manager: propertyManager.name,
    units: 50,
  };


  // Mock tenants
  const tenants = [
    { unit: "101", name: "Alice Brown", moveIn: "2023-05-01", contact: "alice@example.com" },
    { unit: "102", name: "Vacant", moveIn: "-", contact: "-" },
    { unit: "103", name: "Daniel Hervey Buang", moveIn: "Kagabi", contact: "harveybuan1234@gmail.com"},
  ];

  // Mock department heads
  const departments = [
    { dept: "Electrical", head: "Mark Smith", contact: "mark@electrical.com" },
    { dept: "Plumbing", head: "Unassigned", contact: "-" },
    { dept: "Housekeeping", head: "Jane Johnson", contact: "jane@cleaning.com" },
    { dept: "Finance", head: "Unassigned", contact: "-" },
    { dept: "Security", head: "Michael Lee", contact: "michael@security.com" },
  ];

  return (
    <div className="container mt-5">
      {/* Property Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
            <h2>{property.name}</h2>
            <button className="btn btn-danger btn-sm">Deactivate Property</button>
        </div>
          <p className="mb-1"><strong>Type:</strong> {property.type}</p>
          <p className="mb-1"><strong>Address:</strong> {property.address}</p>
          <p className="mb-1"><strong>Manager:</strong> {property.manager}</p>
          <p><strong>Units:</strong> {property.units}</p>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "property_manager" ? "active" : ""}`}
            onClick={() => setActiveTab("property_manager")}
          >
            Property Manager
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tenants" ? "active" : ""}`}
            onClick={() => setActiveTab("tenants")}
          >
            Tenants
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "departments" ? "active" : ""}`}
            onClick={() => setActiveTab("departments")}
          >
            Department Heads
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="card shadow-sm">
        <div className="card-body">
        {activeTab === "property_manager" && (
            <div>
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Property Manager</h4>
                    <button className="btn btn-sm btn-primary">Ressign New Manager</button>
                  </div>
                    <p className="mb-1"><strong>Name:</strong> {propertyManager.name}</p>
                    <p className="mb-1"><strong>Address:</strong> {propertyManager.address}</p>
                </div>
                <div>
                </div>
            </div>
          )}
          {activeTab === "tenants" && (
            <div>
              <h4>Tenants</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Unit</th>
                    <th>Tenant Name</th>
                    <th>Move-in Date</th>
                    <th>Contact</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((t, i) => (
                    <tr key={i}>
                      <td>{t.unit}</td>
                      <td>{t.name}</td>
                      <td>{t.moveIn}</td>
                      <td>{t.contact}</td>
                      <td>
                        {t.name === "Vacant" ? (
                          <p>Not available</p>
                        ) : (
                          <button className="btn btn-sm btn-primary">View</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "departments" && (
            <div>
              <h4>Department Heads</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Head</th>
                    <th>Contact</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((d, i) => (
                    <tr key={i}>
                      <td>{d.dept}</td>
                      <td>{d.head}</td>
                      <td>{d.contact}</td>
                      <td>
                        {d.head === "Unassigned" ? (
                          <button className="btn btn-sm btn-success">Assign</button>
                        ) : (
                          <button className="btn btn-sm btn-primary">View</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-success mt-2">Add Department Head</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
