import React from 'react'

const ContactAndFooter = () => {
  return (
    <div className="tv_tm_section contact-and-footer" id="contact">
      <div className="container">
        <div className="tv_tm_title_holder contact">
          <h3>Contact Me</h3>
          <span>Get in touch with me</span>
        </div>
      </div>
      <div className="tv_tm_footer_contact_wrapper_all">
        <div className="tv_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="tv_tm_mini_title_holder contact">
                <h4>Get in Touch</h4>
              </div>
              <div className="short_info_wrap">
                <ul>
                  <li>
                    <p>
                      <label>Address:</label>
                      <span>Texas, USA</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Phone:</label>
                      <span>
                        <a href="tel:281-875-5865">(281)-875-5865</a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Email:</label>
                      <span>
                        <a href="mailto:thanhvanvu4994@gmail.com">
                          thanhvanvu4994@gmail.com
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Github:</label>
                      <span>
                        <a href="https://github.com/thanhvanvu" target="_blank">
                          github.com/thanhvanvu
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>LinkedIn:</label>
                      <span>
                        <a
                          href="https://www.linkedin.com/in/thanh-vu-768629285/"
                          target="_blank"
                        >
                          linkedin.com/thanhvanvu
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tv_tm_footer_wrap">
          <div className="container">
            <p>&copy; Copyright 2023. All Rights are Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactAndFooter
