import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Mock login validation
      if (!email || !password) {
        setError('Please fill in all fields.');
      } else if (email !== 'user@example.com' || password !== 'password123') {
        setError('Invalid email or password.');
      } else {
        setError('');
        // Proceed with login (e.g., redirect or call API)
        console.log('Login successful');
      }
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
  
                {error && <div className="alert alert-danger">{error}</div>}
  
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
  
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
  
                <div className="text-center mt-3">
                  <small>Don't have an account? <a href="/register">Register</a></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;