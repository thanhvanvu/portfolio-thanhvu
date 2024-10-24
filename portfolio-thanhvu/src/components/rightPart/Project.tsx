import React, { useState } from "react";
import rou from "@/assets/img/svg/logo_rou.png";
import bookStore from "@/assets/img/svg/logo-book-store.png";
import healthCare from "@/assets/img/svg/healthcare.png";
import ProjectDetailModal from "./ProjectDetailModal";

//#region import healthcare image
import healthcare1 from "@/assets/img/healthcare/combine-1-7.jpg";
import healthcare2 from "@/assets/img/healthcare/combine-2-1.jpg";
import healthcare3 from "@/assets/img/healthcare/combine-3-8.jpg";
import healthcare4 from "@/assets/img/healthcare/combine-4-10.jpg";
import healthcare5 from "@/assets/img/healthcare/combine-5.jpg";
import healthcare6 from "@/assets/img/healthcare/combine-6.jpg";
import healthcare7 from "@/assets/img/healthcare/system1.png";
import healthcare8 from "@/assets/img/healthcare/system2.png";
import healthcare9 from "@/assets/img/healthcare/system3.png";
//#endregion

//#region import bookstore image
import bookstore1 from "@/assets/img/bookstore/combine1.jpg";
import bookstore2 from "@/assets/img/bookstore/combine2.jpg";
import bookstore3 from "@/assets/img/bookstore/combine3.jpg";
import bookstore4 from "@/assets/img/bookstore/combine4.jpg";
import bookstore5 from "@/assets/img/bookstore/system.png";
//#endregion

import fuelquote1 from "@/assets/img/fuelquote/1.png";
import fuelquote2 from "@/assets/img/fuelquote/2.png";
import fuelquote3 from "@/assets/img/fuelquote/3.png";
import fuelquote4 from "@/assets/img/fuelquote/4.png";
import fuelquote5 from "@/assets/img/fuelquote/5.png";
import fuelquote6 from "@/assets/img/fuelquote/6.png";

export interface IProjectList {
  projectLogo: string;
  projectName: string;
  projectDes: string;
  projectFullDes?: string;
  projectGithub?: string;
  projectTechnologies?: string;
  projectBulletPoint?: string[];
  projectImage?: { original: string; thumbnail: string }[];
  projectDate?: string;
  projectDemo?: string;
}

const projectList: IProjectList[] = [
  {
    projectLogo: bookStore,
    projectName: "Book Store",
    projectDes:
      "The book store project is a platform where users can browse and order books. With a wide range of books available for exploration...",
    projectFullDes:
      "The book store project offers users the ability to explore and purchase books effortlessly. Featuring an extensive book selection and a smooth ordering process, the project strives to deliver a comprehensive and user-centric book shopping journey.",
    projectGithub: "https://github.com/thanhvanvu/book-store-fe",
    projectTechnologies:
      "HTML5, SCSS (Sass), Javascript, ReactJS, Vite, Ant Design, Redux Toolkit, NestJS, MongoDB.",
    projectDemo: "https://www.bookstore.works/",
    projectDate: "Apr 2023 - Jan 2024",
    projectImage: [
      {
        original: bookstore1,
        thumbnail: bookstore1,
      },
      {
        original: bookstore2,
        thumbnail: bookstore2,
      },
      {
        original: bookstore3,
        thumbnail: bookstore3,
      },
      {
        original: bookstore4,
        thumbnail: bookstore4,
      },
      {
        original: bookstore5,
        thumbnail: bookstore5,
      },
    ],
    projectBulletPoint: [
      "Designed and developed a dynamic e-commerce web application showcasing a variety of books, allowing users to sort, add to cart, and make purchases.",
      "Improved React app performance by 30% with Vite and streamlined the UI using Ant Design.",
      "Enhanced security and user convenience by implementing access tokens and refresh token functionality.",
      "Designed and implemented a secure login and register page, ensuring user data privacy and seamless onboarding.",
      "Created a protected page to secure the administration panel and order history, ensuring unauthorized access is restricted to logged-in users only.",
    ],
  },
  {
    projectLogo: healthCare,
    projectName: "HealthCare Consultancy",
    projectDes:
      "The healthcare consultancy project allows users to access comprehensive information about clinics and doctors in a network...",
    projectFullDes:
      "The healthcare consultancy project enables users to access detailed clinic and doctor information. This simplifies the process of selecting preferred doctors and booking appointments, thus improving healthcare accessibility.",
    projectGithub: "https://github.com/thanhvanvu/clinic-booking",
    projectTechnologies: "React, Bootstrap, Redux, Express, MySQL, Rest API",
    projectDate: "Dec 2022 - May 2023",
    projectImage: [
      {
        original: healthcare1,
        thumbnail: healthcare1,
      },
      {
        original: healthcare2,
        thumbnail: healthcare2,
      },
      {
        original: healthcare3,
        thumbnail: healthcare3,
      },
      {
        original: healthcare4,
        thumbnail: healthcare4,
      },
      {
        original: healthcare5,
        thumbnail: healthcare5,
      },
      {
        original: healthcare6,
        thumbnail: healthcare6,
      },
      {
        original: healthcare7,
        thumbnail: healthcare7,
      },
      {
        original: healthcare8,
        thumbnail: healthcare8,
      },
      {
        original: healthcare9,
        thumbnail: healthcare9,
      },
    ],
    projectBulletPoint: [
      "Designed and developed a responsive web app, simplifying appointment scheduling with comprehensive clinic and doctor info.",
      "Implemented multilingual support (English, Spanish, Vietnamese) using React Intl and Redux, enabling users to change languages with a single click, enhancing accessibility by 15%.",
      "Integrated Nodemailer for automated email confirmations, reducing fake bookings by 70% and improving patient satisfaction by 30%.",
      "Streamlined location services with Google Maps API, reducing load times by 90% and increasing patientengagement by 15%.",
      "Optimized SEO, achieving an 80 score in search engine performance.",
      "Developed a robust backend supporting 30+ API endpoints, improving performance to handle a 20% increase in traffic and patient load.",
      "Utilized ORM (Object Relational Mapping) techniques for efficient data management, further enhancing system efficiency.",
    ],
  },

  {
    projectLogo: rou,
    projectName: "Fuel Quote",
    projectDes:
      "The fuel quote estimation project provides users with quick and accurate estimates of fuel costs based on their location...",
    projectFullDes:
      "The fuel quote estimation project delivers swift and precise fuel cost estimates to users based on their location. By factoring in variables like order history and frequency, users can make well-informed decisions regarding their travel budgeting.",
    projectGithub: "https://github.com/thanhvanvu/Fuel-Quote-Project",
    projectTechnologies: "HTML, CSS, ReactJS, NodeJS, ExpressJS, MongoDB.",
    projectDate: "March 2022 - May 2022",
    projectImage: [
      {
        original: fuelquote1,
        thumbnail: fuelquote1,
      },
      {
        original: fuelquote2,
        thumbnail: fuelquote2,
      },
      {
        original: fuelquote3,
        thumbnail: fuelquote3,
      },
      {
        original: fuelquote4,
        thumbnail: fuelquote4,
      },
      {
        original: fuelquote5,
        thumbnail: fuelquote5,
      },
      {
        original: fuelquote6,
        thumbnail: fuelquote6,
      },
    ],
    projectBulletPoint: [
      "Developed a sophisticated software application utilizing client location, history, gallons requested, and company profit margin to accurately predict fuel rates, improving cost efficiency for clients.",
      "Utilized Agile methodology and HTML, JavaScript, CSS, and ReactJS to create a high-quality, client-centric web app with a 25% increase in client engagement and feedback response rate.",
      "Achieved exceptional web application performance with a loading time of 1.5s for the largest content element, while optimizing user experience by reducing clicks by an average of 4, projected to expand the target audience by 25%.",
      "Engineered a robust back-end using JavaScript, Node.js, Express API, and MongoDB, providing a scalable and efficient infrastructure for the software application.",
      "Implemented JWT (JSON Web Tokens) authentication, reducing the risk of a data breach by 95%, ensuring that only authorized users have access to the application with 100% certainty, and reducing server-side storage needs by 50%.",
      "Implemented automated testing using Jest, ensuring 80% code coverage.",
    ],
  },
];

const Project = () => {
  const [project, setProject] = useState<IProjectList | null>(null);
  const [isOpenProjectModal, setIsOpenProjectModal] = useState<boolean>(false);

  const handleOpenProjectDetail = (project: IProjectList) => {
    setIsOpenProjectModal(!isOpenProjectModal);
    setProject(project);
  };

  return (
    <div className="tv_tm_section" id="projects">
      <div className="tv_tm_projects_wrap">
        <div className="container">
          <div className="tv_tm_title_holder">
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

                        <div className="readmore">
                          <p>Read more...</p>
                        </div>
                      </div>
                    </li>
                  );
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
  );
};

export default Project;
