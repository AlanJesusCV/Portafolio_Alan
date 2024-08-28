import React from 'react'
import { Link } from 'react-router-dom'
import { ProyectList } from './ProyectList'

export const Home = () => {

  return (
    <div className="home">
      <h1>
        Hola, soy Alan Carranza, un <strong>Desarrollador de Software</strong> con más de 3 años de experiencia en la
        planificación, diseño, desarrollo y despliegue de aplicaciones web. Estoy en constante búsqueda de
        oportunidades para crecer profesionalmente en un entorno que me permita contribuir con mis conocimientos
        y habilidades.
      </h1>

      <h1>
        Durante mi carrera, he demostrado adaptabilidad a diversas tecnologías y he liderado proyectos como
        freelancer, lo que me ha permitido desarrollar una fuerte capacidad de liderazgo y gestión de proyectos.
        {/*Mi objetivo es seguir evolucionando en mi carrera y aportar valor en un equipo donde pueda aplicar mi
        experiencia y continuar aprendiendo. */}
      </h1>

      <h2 className="title">
        Si mi perfil es compatible con su empresa me puede contactar. <Link to="/contacto">Contacta Conmigo</Link>
      </h2>
      <section className='lasts-works'>
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son alunos de mis trabajos.</p>

        <ProyectList limit="2" />
      </section>
    </div>
  )
}
