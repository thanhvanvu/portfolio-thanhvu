import portfolioLogo from '@/assets/img/logo/web-development-logo.png'
import { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

interface ILeftPart {
  openLeftPart: boolean
  setOpenLeftPart: (value: boolean) => void
}
const LeftPart = (props: ILeftPart) => {
  const { openLeftPart, setOpenLeftPart } = props
  return (
    <div
      className={
        openLeftPart === true
          ? 'arlo_tm_leftpart_wrap'
          : 'arlo_tm_leftpart_wrap opened'
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
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

        <a
          className={
            openLeftPart === true ? 'arlo_tm_resize' : 'arlo_tm_resize opened'
          }
          href="#"
          onClick={() => setOpenLeftPart(!openLeftPart)}
        >
          <i
            className={
              openLeftPart === true
                ? 'xcon-angle-left'
                : 'xcon-angle-left opened'
            }
          ></i>
        </a>
      </div>
    </div>
  )
}

export default LeftPart
