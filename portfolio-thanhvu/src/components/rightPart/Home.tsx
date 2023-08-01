import { TypeAnimation } from 'react-type-animation'
import avatar from '@/assets/img/hero/thanhvu.jpg'

const Home = () => {
  const handleScrollFromHome = () => {
    const section = document.querySelector('#about')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="tv_tm_section" id="home">
      <div className="tv_tm_hero_header_wrap">
        <div className="tv_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src={avatar} alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  Thanh <span>Vu</span>
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I am&nbsp;
                  <span className="tv_tm_animation_text_word">
                    <TypeAnimation
                      sequence={[
                        'a driven recent graduate',
                        1000,
                        'dedicated to becoming a Web Developer',
                        1000,
                      ]}
                      wrapper="span"
                      speed={40}
                      repeat={Infinity}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="tv_tm_arrow_wrap bounce anchor">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault()
                handleScrollFromHome()
              }}
            >
              <i className="xcon-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
