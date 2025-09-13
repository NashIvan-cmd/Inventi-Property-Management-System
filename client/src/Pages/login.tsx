// ALL USERS

function LoginPage() {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
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
  
            {/* Sign Up Button */}
            <button type="button" className="btn btn-outline-secondary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
  