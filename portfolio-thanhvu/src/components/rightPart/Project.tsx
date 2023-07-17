import React from 'react'
import rou from '@/assets/img/svg/logo_rou.png'
import bookStore from '@/assets/img/svg/logo-book-store.png'
import healthCare from '@/assets/img/svg/healthcare.png'

const Project = () => {
  return (
    <div className="arlo_tm_section" id="projects">
      <div className="arlo_tm_services_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Amazing Projects</h3>
            <span>All my completed projects </span>
          </div>
          <div className="list_wrap">
            <ul>
              <li>
                <div className="inner">
                  <div className="icon">
                    <img
                      className="logo-health-care"
                      src={healthCare}
                      alt="health-care"
                    />
                  </div>
                  <div className="title_service">
                    <h3>HealthCare</h3>
                  </div>
                  <div className="text">
                    <p>
                      The healthcare consultancy project allows users to access
                      comprehensive information about clinics and doctors in a
                      network. Users can easily browse and select their
                      preferred doctor, facilitating a convenient appointment
                      booking process for enhanced healthcare accessibility.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="icon">
                    <img
                      className="logo-book-store"
                      src={bookStore}
                      alt="book-store"
                    />
                  </div>
                  <div className="title_service">
                    <h3>Book Store</h3>
                  </div>
                  <div className="text">
                    <p>
                      The book store project is a platform where users can
                      browse and order books. With a wide range of books
                      available for exploration and a seamless ordering process,
                      this project aims to provide users with a comprehensive
                      and user-friendly book shopping experience.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="icon">
                    <img className="logo-rou" src={rou} alt="rou" />
                  </div>
                  <div className="title_service">
                    <h3>Fuel Quote</h3>
                  </div>
                  <div className="text">
                    <p>
                      The fuel quote estimation project provides users with
                      quick and accurate estimates of fuel costs based on their
                      location. By considering variables such as order
                      histories, the number of orders a user has made, users can
                      make informed decisions about budgeting for their travel
                      expenses.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
