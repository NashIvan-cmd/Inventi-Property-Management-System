// TENANTS ONLY

function LoginPage() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light py-4" style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">FIT PMS</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#">Overview</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tenants</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Staff</a></li>
              </ul>
            </div>
          </div>
        </nav>
      <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style = {{minHeight: "80vh"}}>
        <div className="card p-4 shadow" style={{ width: "400px"}}>
          <h3 className="text-center mb-3">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="unit" className="form-label">Unit</label>
              <input
                type="text"
                className="form-control"
                id="unit"
                placeholder="Enter unit"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
  
            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Login
            </button>

          </form>
        </div>
      </div>
      </div>
    );
  }
  
  export default LoginPage;
  