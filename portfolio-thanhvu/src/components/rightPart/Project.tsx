import React, { useState } from 'react'
import rou from '@/assets/img/svg/logo_rou.png'
import bookStore from '@/assets/img/svg/logo-book-store.png'
import healthCare from '@/assets/img/svg/healthcare.png'
import ProjectDetailModal from './ProjectDetailModal'

//#region import healthcare image
import healthcare1 from '@/assets/img/healthcare/combine-1-7.jpg'
import healthcare2 from '@/assets/img/healthcare/combine-2-1.jpg'
import healthcare3 from '@/assets/img/healthcare/combine-3-8.jpg'
import healthcare4 from '@/assets/img/healthcare/combine-4-10.jpg'
import healthcare5 from '@/assets/img/healthcare/combine-5.jpg'
import healthcare6 from '@/assets/img/healthcare/combine-6.jpg'
import healthcare7 from '@/assets/img/healthcare/system1.png'
import healthcare8 from '@/assets/img/healthcare/system2.png'
import healthcare9 from '@/assets/img/healthcare/system3.png'
//#endregion

//#region import bookstore image
import bookstore1 from '@/assets/img/bookstore/combine1.jpg'
import bookstore2 from '@/assets/img/bookstore/combine2.jpg'
import bookstore3 from '@/assets/img/bookstore/combine3.jpg'
import bookstore4 from '@/assets/img/bookstore/combine4.jpg'
import bookstore5 from '@/assets/img/bookstore/system.png'
//#endregion

import fuelquote1 from '@/assets/img/fuelquote/1.png'
import fuelquote2 from '@/assets/img/fuelquote/2.png'
import fuelquote3 from '@/assets/img/fuelquote/3.png'
import fuelquote4 from '@/assets/img/fuelquote/4.png'
import fuelquote5 from '@/assets/img/fuelquote/5.png'
import fuelquote6 from '@/assets/img/fuelquote/6.png'

export interface IProjectList {
  projectLogo: string
  projectName: string
  projectDes: string
  projectGithub?: string
  projectBulletPoint?: string[]
  projectImage?: object[]
  projectDate?: string
}

const projectList: IProjectList[] = [
  {
    projectLogo: healthCare,
    projectName: 'HealthCare',
    projectDes:
      'The healthcare consultancy project allows users to access comprehensive information about clinics and doctors in a network...',
    projectGithub: 'https://github.com/vvt4994/clinic-booking',
    projectDate: 'Jan 2023 - May 2023',
    projectImage: [
      {
        original: healthcare1,
      },
      {
        original: healthcare2,
      },
      {
        original: healthcare3,
      },
      {
        original: healthcare4,
      },
      {
        original: healthcare5,
      },
      {
        original: healthcare6,
      },
      {
        original: healthcare7,
      },
      {
        original: healthcare8,
      },
      {
        original: healthcare9,
      },
    ],
    projectBulletPoint: [
      'Designed and developed a responsive web application displaying clinic/hospital information, doctor profiles, and specialties, enabling users to schedule appointments seamlessly.',
      'Created an intuitive administration page integrated with Markdown Editor, allowing admin to manage doctor and clinic/hospital information 10%-20% more efficiently.',
      'Implemented multilingual support (English, Spanish, Vietnamese) using react-intl and Redux, enabling users to change languages with a single click, enhancing accessibility and usability by 15%.',
      'Implemented an automated email system using Nodemailer to send appointment details and confirmation links to patients, resulting in a 70% reduction in fake bookings and a 30% increase in patient satisfaction with 1-click confirmation.',
      'Utilized Google Maps API for clinic/hospital locations, reducing map load time by 90% and improving patient engagement by 15%.',
      'Ensured a seamless user experience across devices with a responsive web design, resulting in a 10% increase in website traffic and a 5% increase in conversion rate.',
      'Developed a scalable back-end handling over 30 different API endpoints, enhancing performance and accommodating increased traffic and patient load by 20%.',
      'Utilized ORM (Object Relational Mapping) to streamline data sharing between 10 database tables by 50%, simplifying code maintenance.',
      'Implemented the MVC architectural pattern to enhance code maintainability by 20%.',
    ],
  },
  {
    projectLogo: bookStore,
    projectName: 'Book Store',
    projectDes:
      ' The book store project is a platform where users can browse and order books. With a wide range of books available for exploration and a seamless ordering process...',
    projectGithub: 'https://github.com/vvt4994/book-store-fe',
    projectDate: 'May 2023 - July 2023',
    projectImage: [
      {
        original: bookstore1,
      },
      {
        original: bookstore2,
      },
      {
        original: bookstore3,
      },
      {
        original: bookstore4,
      },
      {
        original: bookstore5,
      },
    ],
    projectBulletPoint: [
      'Developed a dynamic e-commerce web application showcasing a wide range of books, allowing users to sort, add to cart, and make purchases.',
      'Utilized Vite to improve performance by up to 30% compared to a traditional React application, ensuring faster load times and enhanced responsiveness.',
      'Leveraged Ant Design library for efficient SCSS coding, resulting in a 50% reduction in development time and improved user satisfaction with aesthetically pleasing and user-friendly interfaces.',
      'Designed and implemented a secure login and register page, ensuring user data privacy and seamless onboarding.',
      'Implemented secure access token storage in cookies and implemented refresh token functionality, enhancing security by 20% and user convenience by 30%.',
      'Created a protected page to secure the administration panel and order history, ensuring unauthorized access is restricted to logged-in users only.',
      'Implemented slug URLs for every book product, optimizing SEO and boosting website traffic by improving search result rankings by 5%.',
    ],
  },
  {
    projectLogo: rou,
    projectName: 'Fuel Quote',
    projectDes:
      'The fuel quote estimation project provides users with quick and accurate estimates of fuel costs based on their location. By considering variables such as order histories...',
    projectGithub: 'https://github.com/vvt4994/Fuel-Quote-Project',
    projectDate: 'March 2022 - May 2022',
    projectImage: [
      {
        original: fuelquote1,
      },
      {
        original: fuelquote2,
      },
      {
        original: fuelquote3,
      },
      {
        original: fuelquote4,
      },
      {
        original: fuelquote5,
      },
      {
        original: fuelquote6,
      },
    ],
    projectBulletPoint: [
      'Developed a sophisticated software application utilizing client location, history, gallons requested, and company profit margin to accurately predict fuel rates, improving cost efficiency for clients.',
      'Utilized Agile methodology and HTML, JavaScript, CSS, and ReactJS to create a high-quality, client-centric web app with a 25% increase in client engagement and feedback response rate.',
      'Achieved exceptional web application performance with a loading time of 1.5s for the largest content element, while optimizing user experience by reducing clicks by an average of 4, projected to expand the target audience by 25%.',
      'Engineered a robust back-end using JavaScript, Node.js, Express API, and MongoDB, providing a scalable and efficient infrastructure for the software application.',
      'Implemented JWT (JSON Web Tokens) authentication, reducing the risk of a data breach by 95%, ensuring that only authorized users have access to the application with 100% certainty, and reducing server-side storage needs by 50%.',
      'Implemented automated testing using Jest, ensuring 80% code coverage.',
    ],
  },
]

const Project = () => {
  const [project, setProject] = useState<IProjectList | null>(null)
  const [isOpenProjectModal, setIsOpenProjectModal] = useState<boolean>(false)

  const handleOpenProjectDetail = (project: IProjectList) => {
    setIsOpenProjectModal(!isOpenProjectModal)
    setProject(project)
  }

  return (
    <div className="arlo_tm_section" id="projects">
      <div className="arlo_tm_projects_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Amazing Projects</h3>
            <span>All my completed projects </span>
          </div>

          <div className="list_wrap">
            <ul>
              {projectList &&
                projectList.map((project, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleOpenProjectDetail(project)}
                    >
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="logo-health-care"
                            src={project.projectLogo}
                            alt="health-care"
                          />
                        </div>
                        <div className="title_service">
                          <h3>{project.projectName}</h3>
                        </div>
                        <div className="text">
                          <p>{project.projectDes}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>

      <ProjectDetailModal
        setIsOpenProjectModal={setIsOpenProjectModal}
        project={project}
        isOpenProjectModal={isOpenProjectModal}
      />
    </div>
  )
}

export default Project
