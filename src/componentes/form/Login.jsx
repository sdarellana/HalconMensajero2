import React from 'react'

export default function Login() {
  return (
    <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Inicio de sesión</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
            </div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>  <p className='Registro text-right mt-2'>Registrase </p>
               </p>
            </div>
        </form>
        </div>
  )
}
