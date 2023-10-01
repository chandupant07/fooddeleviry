import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  const [getdata, set] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handelsubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: getdata.name, email: getdata.email, password: getdata.password, location: getdata.geolocation }),

    });
    const json = await response.json()
    console.log(json);

    if (!JSON.success) {
      alert('enter valid data')
    }
  }

  const onChange = (e) => {
    set({ ...getdata, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className='container p-5'>
        <div className='row justify-content-center'>
          <div className='col-6'>

            <h3 className='bg-danger text-white text-center p-3'>User Registration Form</h3>
            <form onSubmit={handelsubmit}>
              <div className="form-group text-center">
                <label htmlFor="name">User Name</label>
                <input type="text" className="form-control" name='name' value={getdata.name} onChange={onChange} />
              </div>
              <div className="form-group text-center">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" name='password' value={getdata.password} onChange={onChange} />
              </div>

              <div className="form-group text-center">
                <label htmlFor="Email">Email</label>
                <input type="Email" className="form-control" name='email' value={getdata.email} onChange={onChange} />
              </div>

              <div className="form-group text-center">
                <label htmlFor="City">City</label>
                <input type="text" className="form-control" name='geolocation' value={getdata.geolocation} onChange={onChange} />
              </div>

              <div className='container m-3 d-flex justify-content-around'>
                <button type="submit" className="btn btn-primary w-25">Submit</button>

                <Link to="/login" className="btn btn-danger w-25">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
