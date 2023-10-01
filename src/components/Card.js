import React from 'react'

export default function Card() {
  return (
    <div>
      <div className='container d-flex flex-row'>
        <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img className="card-img-top" src="https://source.unsplash.com/random/200×200/?pasty" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Content gors Here.....</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-danger rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>

              <select className='m-2 h-100 bg-danger rounded'>
                <option key={"half"} value={"half"}>half</option>
                <option key={"full"} value={"full"}>full</option>
              </select>

              <div className='h-100 fs-5 d-inline'>
                Total Price
              </div>
            </div>
            {/* <a link="/" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>


    </div>
  )
}
