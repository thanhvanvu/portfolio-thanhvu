import React from 'react'
import About from './About'
import Home from './Home'
import Project from './Project'
import ContactAndFooter from './ContactAndFooter'

interface IRightPart {
  openLeftPart: boolean
  setOpenLeftPart: (value: boolean) => void
}

const RightPart = (props: IRightPart) => {
  const { openLeftPart } = props
  return (
    <div
      className={
        openLeftPart === true ? 'arlo_tm_rightpart' : 'arlo_tm_rightpart opened'
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
