function MainNavBar (){

return(
<nav className="navbar navbar-expand-lg navbar-light py-4 " style={{ backgroundColor: "#29487d" }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{fontWeight: "bold", color: "white" }}>Property Management System</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#" style={{color: "white" }}>Overview</a></li>
          <li className="nav-item"><a className="nav-link" href="#" style={{color: "white" }}>Tenants</a></li>
          <li className="nav-item"><a className="nav-link" href="#" style={{color: "white" }}>Staff</a></li>
        </ul>
      </div>
    </div>
  </nav>
)
}


export default MainNavBar