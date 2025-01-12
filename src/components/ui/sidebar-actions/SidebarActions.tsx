import Link from 'next/link'
import React from 'react'

interface Props {
  name: string,
  icon: React.ElementType
}


export const SidebarActions = ({ name, icon: Icon}: Props) => {

  return (
    <>

      <Link href='/'
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
      >
        <Icon size={30} />
        <span className='ml-3 text-xl '> {name} </span>

      </Link>

    </>
  )
}
