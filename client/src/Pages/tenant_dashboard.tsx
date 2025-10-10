//TENANTS ONLY

import TenantSidebar from "../Components/tenant_sidebar";
import TenantNavbar from "../Components/tenant_navbar";

function TenantDashboard() {
    return (
      <div className="d-flex">
        {/* Sidebar */}
        <TenantSidebar/>
        
        {/* Main Content */}
        <div className="flex-grow-1">
          {/* Navbar */}
          <TenantNavbar page = "HOME"/>
  
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
  