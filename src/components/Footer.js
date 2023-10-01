import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <div className="container bg-danger">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item text-light"><a Link="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a Link="#" className="nav-link px-2 text-muted text-white">Features</a></li>
            <li className="nav-item"><a Link="#" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a Link="#" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a Link="#" className="nav-link px-2 text-muted">About</a></li>
          </ul>
          <p className="text-center text-muted text-primary">© 2023 Eduonix, Inc</p>
        </footer>
      </div>
    </div>
  )
}
