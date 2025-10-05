

function TenantSidebar(){

    return(
        <div className="bg-light border-end vh-100" style={{ width: "220px" }}>
          <div className="p-3">
            <h5 className="fw-bold mb-4">Tenant Portal</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  🏠 Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  📝 Tickets
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  💳 Billings
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  🎫 QR
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  🏷 Marketplace
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  👤 User Profile
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  🏀 Reserve Amenities
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default TenantSidebar