import { useEffect, useState } from 'react'
import Preloader from '../components/Preloader'
import MobileMenu from '../components/mobile/MobileMenu'
import LeftPart from '../components/leftPart/LeftPart'
import RightPart from '../components/rightPart/RightPart'
import { FloatButton } from 'antd'
import { isMobile } from 'react-device-detect'

const Portfolio = () => {
  const [openLeftPart, setOpenLeftPart] = useState<boolean>(false)
  const [mobileMode, setMobileMode] = useState<boolean>(true)
  const [preloader, setPreloader] = useState<boolean>(true)

  const loadingPage = () => {
    setTimeout(() => {
      setPreloader(false)
    }, 500)
  }

  useEffect(() => {
    loadingPage()
    if (isMobile) {
      setOpenLeftPart(false)
    } else {
      setOpenLeftPart(true)
    }
  }, [])

  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}
      <Preloader preloader={preloader} />

      {/* <!-- MOBILE MENU --> */}
      <MobileMenu />

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart
          openLeftPart={openLeftPart}
          setOpenLeftPart={setOpenLeftPart}
          mobileMode={mobileMode}
        />

        {/* <!-- RIGHTPART --> */}
        <RightPart
          openLeftPart={openLeftPart}
          setOpenLeftPart={setOpenLeftPart}
          mobileMode={mobileMode}
        />

        {/* <!-- FLOAT BUTTON --> */}
        <FloatButton.BackTop
          className="float-button"
          tooltip={<div>Scroll to top</div>}
        />
      </div>
    </div>
  )
}

export default Portfolio
