import React from 'react'

interface IPreloader {
  preloader: boolean
}

const Preloader = (props: IPreloader) => {
  const { preloader } = props
  return (
    <div
      className={
        preloader === true ? 'tv_tm_preloader' : 'tv_tm_preloader loaded'
      }
    >
      <div className="spinner_wrap">
        <div className="spinner"></div>
      </div>
    </div>
  )
}

export default Preloader
