import React from "react"

import { useState } from 'react'
// import { useHistory } from 'react-router-dom'


export default function (props) {
  // const history = useHistory()


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3030/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				
				email,
				password,
			}),
		})

		const data = await response.json()

		// if (data.status === 'ok') {
		// 	history.push('/login')
		// }
	}

  return (
    <div className="Auth-form-container">
      <form onSubmit={registerUser} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="user"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            	value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
           </div>
          
        </div> 
      </form>
    </div>
  )
}