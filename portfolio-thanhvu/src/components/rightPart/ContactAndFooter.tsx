import React from 'react'

const ContactAndFooter = () => {
  return (
    <div className="arlo_tm_section" id="contact">
      <div className="container">
        <div className="arlo_tm_title_holder contact">
          <h3>Contact Me</h3>
          <span>Get in touch with me</span>
        </div>
      </div>
      <div className="arlo_tm_footer_contact_wrapper_all">
        <div className="arlo_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder contact">
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
                      <label>Email:</label>
                      <span>
                        <a href="mailto:example@gmail.com">
                          thanhvanvu4994@gmail.com
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Phone:</label>
                      <span>+1 281 875 5865</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Github:</label>
                      <span>
                        <a href="mailto:example@gmail.com">
                          https://github.com/vvt4994
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_footer_wrap">
          <div className="container">
            <p>&copy; Copyright 2023. All Rights are Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactAndFooter
