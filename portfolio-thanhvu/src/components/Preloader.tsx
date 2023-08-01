import React from 'react'

interface IPreloader {
  preloader: boolean
}

const Preloader = (props: IPreloader) => {
  const { preloader } = props
  return (
    <div
      className={
        preloader === true ? 'arlo_tm_preloader' : 'arlo_tm_preloader loaded'
      }
    >
      <div className="spinner_wrap">
        <div className="spinner"></div>
      </div>
    </div>
  )
}

export default Preloader
