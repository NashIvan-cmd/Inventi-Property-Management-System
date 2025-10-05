//TENANTS ONLY

import TenantSidebar from "../Components/tenant_sidebar";

function TenantDashboard() {
    return (
      <div className="d-flex">
        {/* Sidebar */}
        <TenantSidebar/>
        
        {/* Main Content */}
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
  
          {/* Content */}
          <div className="container mt-4">
            <h3>Welcome back, Tenant!</h3>
            <p className="text-muted">Here are your latest updates:</p>
  
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5 className="card-title">📢 Digital Noticeboard</h5>
                <p className="card-text">No new announcements.</p>
              </div>
            </div>
  
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🔔 Notifications</h5>
                <p className="card-text">You have no new notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TenantDashboard;
  