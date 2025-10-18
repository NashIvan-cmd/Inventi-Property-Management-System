

function ElectricalSidebar(){

    return(
        <div className="bg-light border-end vh-100 sticky-top" style={{ width: "220px" }}>
          <div className="p-3">
            <h5 className="fw-bold mb-4">Electrical Department Portal</h5>
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
            </ul>
          </div>
        </div>
    )
}

export default ElectricalSidebar