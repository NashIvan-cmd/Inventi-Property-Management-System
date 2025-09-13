// PROPERTY MANAGER ONLY

import React, { useState, type ChangeEvent, type FormEvent } from 'react';

interface DepartmentHeadFormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
}

const RegisterDepartmentHead: React.FC = () => {
  const [formData, setFormData] = useState<DepartmentHeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    department: '',
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
    console.log('Submitting Department Head:', formData);
    alert('Department Head registered successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      department: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Register Department Head</h1>

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
              <label htmlFor="department" className="form-label">Assigned Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select department</option>
                <option value="Electrical Department">Electrical Department</option>
                <option value="Plumbing/Mechanical Department">Plumbing/Mechanical Department</option>
                <option value="Housekeeping/Janitorial/Waste Management Department">Housekeeping/Janitorial/Waste Management Department</option>
                <option value="Finance Department">Finance Department</option>
                <option value="Security Department">Security Department</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success">Register Department Head</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDepartmentHead;
