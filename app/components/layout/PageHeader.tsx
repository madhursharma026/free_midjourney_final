import Link from 'next/link'
import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import Container from '../Ui/Container';

const PageHeader = ({title}) => {
  return (
    <div className="pq-breadcrumb bg-[#090909] text-white pt-40 pb-24 relative">
        <Container>
          <nav aria-label="breadcrumb">
            <h1 className='text-6xl m-0 font-Mona_Bold text-white text-center'>{title}</h1>

            <ol className="mt-3 p-0 list-none flex items-center space-x-2 justify-center">
              <li className="list-none">
                <Link href="/">Home</Link>
              </li>
              <li className='list-none'><LuChevronRight /></li>
              <li className="list-none active">{title}</li>
            </ol>
          </nav>
        </Container>
    </div>
  )
}

export default PageHeader