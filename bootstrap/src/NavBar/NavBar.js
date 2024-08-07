import React from 'react'
import '../App.css'; 
import Section from './Section';
export default function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-black '>
        <div className='container-fluid'>
            <a className='navbar-brand text-lg-start text-white '><strong className='fs-4 text-warning'>Frontend BootCamp</strong></a>
            <button 
                className='navbar-toggler'
                type='button' 
                data-bs-toggle='collapse'
                data-bs-target='#navbar' 
              ><span className='fas fa-bars text-warning'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbar'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item me-3 fs-5 hover-effect active text-white '><a className='nav-link hover-effect text-white'>What You'll Learn</a></li>
                    <li className='nav-item me-3 fs-5 hover-effect active text-white '><a className='nav-link hover-effect text-white'>Questions</a></li>
                    <li className='nav-item me-3 fs-5 hover-effect active text-white'><a className='nav-link hover-effect text-white'>Your Instructor</a></li>
                </ul>
            </div>
            
            </div>
      </nav>
      <Section/>
      <div className='bg-warning p-3'>
      <div className='container d-lg-flex p-2 align-items-center justify-content-between'>
        <h1 className='fs-4 mb-3 mb-lg-0'>Sign Up For Our NewsLetter</h1>
        <div className='input-group w-50'>
          <input 
            type='text' 
            className='form-control w-lg-full' 
            placeholder="Recipient's username" 
          />
          <button 
            className='input-group-text btn bg-danger text-white hover-effect'
            id='basic-addon2'
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
