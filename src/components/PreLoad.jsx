import React from 'react'

const PreLoad = ({load}) => {
  return (
    <div id={load ? "preloader" : "preloader-none"}></div>
  )
}

export default PreLoad
