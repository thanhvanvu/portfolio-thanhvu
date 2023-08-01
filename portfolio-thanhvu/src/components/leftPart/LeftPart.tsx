import portfolioLogo from '@/assets/img/logo/web-development-logo.png'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

interface ILeftPart {
  openLeftPart: boolean
  mobileMode: boolean
  setOpenLeftPart: (value: boolean) => void
}
const LeftPart = (props: ILeftPart) => {
  const { openLeftPart, setOpenLeftPart, mobileMode } = props
  const [activeMenu, setActiveMenu] = useState<string | null>('home')

  useEffect(() => {
    const currentURL = new URL(window.location.href)
    const fragment = currentURL.hash

    if (fragment) {
      const tab = fragment.replace('#', '')
      setActiveMenu(tab)

      setTimeout(() => {
        handleScroll(tab)
      }, 1000)
    }
  }, [])

  const handleScroll = (target: string) => {
    const section = document.querySelector(`#${target}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        window.location.hash = target
      }, 1000)
    }
  }

  return (
    <div
      className={
        openLeftPart === true
          ? 'tv_tm_leftpart_wrap'
          : 'tv_tm_leftpart_wrap opened'
      }
    >
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#">
            <img src={portfolioLogo} alt="desktop-logo" />
          </a>
        </div>
        <div className="menu_list_wrap">
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
        <div className="leftpart_bottom">
          <div className="social_wrap">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100005056689985"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a href="https://github.com/vvt4994" target="_blank">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {!isMobile && (
          <a
            className={
              openLeftPart === true ? 'tv_tm_resize' : 'tv_tm_resize opened'
            }
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setOpenLeftPart(!openLeftPart)
            }}
          >
            <i
              className={
                openLeftPart === true
                  ? 'xcon-angle-left'
                  : 'xcon-angle-left opened'
              }
            ></i>
          </a>
        )}
      </div>
    </div>
  )
}

export default LeftPart
