import mobileLogo from '@/assets/img/logo/web-development-logo-mobile.png'
import { useState } from 'react'

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>('home')
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const handleScroll = (target: string) => {
    const section = document.querySelector(`#${target}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        window.location.hash = target
      }, 1000)
    }
  }

  const style = {
    overflow: 'hidden',
    height: openMenu === true ? 220 : 0,
    transition: '0.3s',
    display: 'block',
  }
  return (
    <div className="arlo_tm_mobile_header_wrap">
      <div className="main_wrap">
        <div className="logo">
          <a href="index.html">
            {/* <img src="img/logo/mobile_logo.png" alt="mobile_logo" /> */}
            <img src={mobileLogo} alt="mobile_logo" />
          </a>
        </div>
        <div className="arlo_tm_trigger" onClick={() => setOpenMenu(!openMenu)}>
          <div
            className={
              openMenu === false
                ? 'hamburger hamburger--collapse-r'
                : 'hamburger hamburger--collapse-r is-active'
            }
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="arlo_tm_mobile_menu_wrap" style={style}>
        <div className="mob_menu">
          <ul className="anchor_nav">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll('home')
                  setActiveMenu('home')
                }}
                className={
                  activeMenu === 'home' || activeMenu === '' ? 'active' : ''
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll('about')
                  setActiveMenu('about')
                }}
                className={activeMenu === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll('projects')
                  setActiveMenu('projects')
                }}
                className={activeMenu === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll('contact')
                  setActiveMenu('contact')
                }}
                className={activeMenu === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
