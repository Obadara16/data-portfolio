import React from 'react'
import '../styles.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>I build the front-end for all kinds of websites ranging from E-commerce, blog, events websites and
              business websites for clients. 
              </p>
          </li>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>I carry out other administrative tasks including typing, content creation and record-keeping.</p>
          </li>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>I train people on web development technologies such as HTML, CSS Javascript, SASS, React, PHP and others .</p>
          </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>
          
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Identifying relevant data sources for business needs.</p>
          </li>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Undertake preprocessing of structured and unstructured data</p>
          </li>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyze large amounts of information to discover trends and patterns</p>
          </li>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Present information using data visualization techniques</p>
          </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services