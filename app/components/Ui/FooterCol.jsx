import React from 'react'

const FooterCol = ({children, title}) => {
  return (
    <div className="mt-0">
        <h2 className="text-xl font-Mona_Bold tracking-wide text-white">{title}</h2>
        <ul className="mt-6 p-0 menu">
            {children}
        </ul>
    </div>
  )
}

export default FooterCol