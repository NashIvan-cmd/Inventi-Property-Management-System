import React from "react";
import ElectricalSidebar from "../Components/electrical_sidebar";
import ElectricalNavbar from "../Components/electrical_navbar";
import { ContinuousCalendar } from "../Components/ContinuousCalendar";

const ElectricalDashboard: React.FC = () => {
  return (
    <div className="d-flex">
      <ElectricalSidebar/>
      <div className="flex-grow-1">
        <ElectricalNavbar page="HOME"/>
        <div className="container mt-5">
        <h1 className="mb-1 text-primary">Electrical Department Dashboard</h1>
        <p className="text-muted mb-5">
          Access department tools, schedules, and reports quickly.
        </p>
        <ContinuousCalendar/>
        {/* Announcements / Notices */}
        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <h5 className="card-title">Announcements</h5>
            <p className="card-text text-muted">
              No new announcements.
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mb-4">
          <h4>Quick Actions</h4>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-outline-primary">View Tickets</button>
            <button className="btn btn-outline-secondary">Maintenance Schedule</button>
            <button className="btn btn-outline-info">Job Completion Logs</button>
            <button className="btn btn-outline-warning">Parts Inventory</button>
          </div>
        </div>
    
    
        {/* Quick Overview Cards */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <h5 className="card-title">Pending Tickets</h5>
                <p className="card-text display-6">View & manage</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">Preventive Maintenance</h5>
                <p className="card-text display-6">Schedule & Logs</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-body">
                <h5 className="card-title">Spare Parts & Inventory</h5>
                <p className="card-text display-6">Track Resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
  </div>
    
  );
};

export default ElectricalDashboard;
