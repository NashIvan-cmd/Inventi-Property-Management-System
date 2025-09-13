// PROPERTY MANAGER ONLY
import React, { useState, type ChangeEvent, type FormEvent } from 'react';

interface TenantFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyAssigned: string;
  unitNumber?: string;
  moveInDate?: string;
}

const RegisterTenant: React.FC = () => {
  const [formData, setFormData] = useState<TenantFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyAssigned: '',
    unitNumber: '',
    moveInDate: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitting tenant:', formData);
    alert('Tenant registered successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyAssigned: '',
      unitNumber: '',
      moveInDate: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Register Tenant</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="propertyAssigned" className="form-label">Property Assigned</label>
              <input
                type="text"
                id="propertyAssigned"
                name="propertyAssigned"
                value={formData.propertyAssigned}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Name of the property managed"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="unitNumber" className="form-label">Unit Number</label>
              <input
                type="text"
                id="unitNumber"
                name="unitNumber"
                value={formData.unitNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="moveInDate" className="form-label">Move-in Date</label>
              <input
                type="date"
                id="moveInDate"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success">Register Tenant</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTenant;
