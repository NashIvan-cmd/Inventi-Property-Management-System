function ElectricalNavbar({page}: {page: string}){

  return(
      <nav className="navbar navbar-expand-lg navbar-dark px-3" style = {{backgroundColor: "#29487d"}}>
          <a className="navbar-brand fw-bold" href="#">
          {page}
          </a>
          <div className="ms-auto d-flex align-items-center">
              <button className="btn btn-outline-light btn-sm">Logout</button>
          </div>
      </nav>
  )
  
}

export default ElectricalNavbar