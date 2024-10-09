import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    accountName: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (you can extend this with better validation)
    if (!formData.email || !formData.accountName || !formData.password) {
      setError('Please fill in all fields.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Registration successful!');
      // You can make API calls here to handle the registration process
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Register</h3>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="accountName" className="form-label">Account Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accountName"
                    name="accountName"
                    placeholder="Enter your account name"
                    value={formData.accountName}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>

              <div className="text-center mt-3">
                <small>Already have an account? <a href="/login">Login</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
