import React from 'react'
import About from './About'
import Home from './Home'
import Project from './Project'
import ContactAndFooter from './ContactAndFooter'

interface IRightPart {
  openLeftPart: boolean
  mobileMode: boolean
  setOpenLeftPart: (value: boolean) => void
}

const RightPart = (props: IRightPart) => {
  const { openLeftPart, mobileMode } = props
  return (
    <div
      // className={
      //   mobileMode === false
      //     ? openLeftPart === true
      //       ? 'tv_tm_rightpart'
      //       : 'tv_tm_rightpart opened'
      //     : 'tv_tm_rightpart full'
      // }

      className={
        openLeftPart === true ? 'tv_tm_rightpart' : 'tv_tm_rightpart opened'
      }
    >
      <div className="rightpart_inner">
        <Home />

        {/* <!-- ABOUT --> */}
        <About />
        {/* <!-- /ABOUT --> */}

        {/* <!-- PROJECTS --> */}
        <Project />
        {/* <!-- /PROJECTS --> */}

        {/* <!-- CONTACT & FOOTER --> */}
        <ContactAndFooter />
        {/* <!-- /CONTACT & FOOTER --> */}
      </div>
    </div>
  )
}

export default RightPart
