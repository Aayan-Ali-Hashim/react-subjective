import React from 'react'
import Main from './ Main/Main'
import Header from './Header/Header'
const LeftSide = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
      <Header />
      <Main />
</div>
  )
}

export default LeftSide
