import React from 'react'
import PageLoader from './components/common/PageLoader'

const Loading = () => {
  return (
      <div style={{ display: 'grid', placeItems: 'center', zIndex: 9999, position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, background: "#fff"}}>
        <PageLoader />
      </div>
  )
}

export default Loading