import { useState } from 'react'
import Preloader from '../components/Preloader'
import MobileMenu from '../components/mobile/MobileMenu'
import LeftPart from '../components/leftPart/LeftPart'
import RightPart from '../components/rightPart/RightPart'
import { FloatButton } from 'antd'

const Portfolio = () => {
  const [openLeftPart, setOpenLeftPart] = useState<boolean>(true)
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
      <Preloader />

      {/* <!-- MOBILE MENU --> */}
      <MobileMenu />

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart
          openLeftPart={openLeftPart}
          setOpenLeftPart={setOpenLeftPart}
        />

        {/* <!-- RIGHTPART --> */}
        <RightPart
          openLeftPart={openLeftPart}
          setOpenLeftPart={setOpenLeftPart}
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
