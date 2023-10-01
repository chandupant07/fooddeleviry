
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [getdata, set] = useState({ email: "", password: "" })
  let navigate = useNavigate()

  const handelsubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: getdata.email, password: getdata.password, }),

    });
    const json = await response.json()
    console.log(json);

    if (!JSON.success) {
      alert('enter valid data')
    }

    if (JSON.success) {
      navigate('/');
    }
  }

  const onChange = (e) => {
    set({ ...getdata, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className='container p-5'>


        <form onSubmit={handelsubmit}>

          <div className='row justify-content-center'>
            <div className='col-6 '>
              <h3 className='bg-danger text-white text-center p-3'>User Login Form</h3>
              <div className="form-group text-center">
                <label htmlFor="Email">Email</label>
                <input type="Email" className="form-control" name='email' value={getdata.email} onChange={onChange} />
              </div>

              <div className="form-group text-center">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" name='password' value={getdata.password} onChange={onChange} />
              </div>

              <div className='container m-3 d-flex justify-content-around'>
                <button type="submit" className="btn btn-primary w-25">Submit</button>

                <Link to="/createuser" className="btn btn-danger w-25">register</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
