import aboutAvatar from '@/assets/img/about/thanhvu.png'
import resume from '@/assets/resume.pdf'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner" data-img-url={aboutAvatar}></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    I'm Thanh Vu,&nbsp;
                    <span className="arlo_tm_animation_text_word">
                      <TypeAnimation
                        sequence={[
                          'a driven recent graduate',
                          1000,
                          'an aspiring Web Developer',
                          1000,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                      />
                    </span>
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Hello! My name is <strong>Thanh Vu</strong>, and I am a
                    first-generation student who recently graduated from the
                    University of Houston with a major in Computer Science,
                    focusing on web development. I am currently actively
                    pursuing full-time opportunities in the field of web
                    development.
                  </p>
                  <br />
                  <p>
                    With a strong academic background, holding a Bachelor of
                    Science degree in Computer Science and a minor in
                    Mathematics from the University of Houston, I possess a
                    solid foundation in both the theoretical and practical
                    aspects of web development. My expertise lies in programming
                    languages such as Python, JavaScript, TypeScript, and more,
                    with a specific emphasis on their application in web
                    development.
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label> 09.04.1994
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Gender:</label> Male
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Study:</label> University of Houston
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Major:</label> Computer Science
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Degree:</label> Bachelor
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Github:</label>
                        <a href="https://github.com/vvt4994" target="_blank">
                          https://github.com/vvt4994
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail:</label>
                        <a href="mailto:thanhvanvu4994@gmail.com">
                          thanhvanvu4994&#64;gmail.com
                        </a>
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Facebook:</label>
                        <a
                          href="https://www.facebook.com/profile.php?id=100005056689985"
                          target="_blank"
                        >
                          &#64;ThanhVu
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={resume} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
