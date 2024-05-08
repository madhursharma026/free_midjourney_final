import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto'>{children}</div>
  )
}

export default Container