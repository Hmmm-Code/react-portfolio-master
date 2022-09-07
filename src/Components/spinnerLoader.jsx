
import React from 'react'
import { BallTriangle } from  'react-loader-spinner'


const spinnerLoader = () => {

  return (
      <BallTriangle clasName="loader"
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
      visible={false}
      display="flex"
      justify-content="center"
      align-item="center"
      font-size="30rem"
  />

  )
}

export default spinnerLoader