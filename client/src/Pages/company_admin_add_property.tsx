// COMPANY ADMIN ONLY
import React, { useState, type ChangeEvent, type FormEvent } from 'react';

interface PropertyFormData {
  name: string;
  type: string;
  address: string;
  manager: string;
  units?: number;
}

const RegisterProperty: React.FC = () => {
  const [formData, setFormData] = useState<PropertyFormData>({
    name: '',
    type: '',
    address: '',
    manager: '',
    units: undefined,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'units' ? (value ? Number(value) : undefined) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitting property:', formData);
    // TODO: Replace with API call
    alert('Property submitted successfully!');
    setFormData({
      name: '',
      type: '',
      address: '',
      manager: '',
      units: undefined,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Register New Property</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Property Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label">Property Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address / Location</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="manager" className="form-label">Assigned Property Manager</label>
              <input
                type="text"
                id="manager"
                name="manager"
                value={formData.manager}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="units" className="form-label">Number of Units (optional)</label>
              <input
                type="number"
                id="units"
                name="units"
                value={formData.units ?? ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success">Submit Property</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterProperty;
