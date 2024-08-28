import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>A</span>
        <h3>Alan Carranza Vazquez</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active" : ""}>Portafolio</NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
