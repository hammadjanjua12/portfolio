import React from 'react'

import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
       
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Minim incididunt excepteur non ex excepteur non enim irure culpa
                exercitation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Minim incididunt excepteur non ex excepteur non enim irure culpa
                exercitation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Minim incididunt excepteur non ex excepteur non enim irure culpa
                exercitation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Minim incididunt excepteur non ex excepteur non enim irure culpa
                exercitation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Minim incididunt excepteur non ex excepteur non enim irure culpa
                exercitation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Minim incididunt excepteur non ex excepteur non enim irure culpa
                exercitation.
              </p>
            </li>
          </ul>
        </article>
        {/* end of web */}
        
      </div>
    </section>
  );
}

export default services