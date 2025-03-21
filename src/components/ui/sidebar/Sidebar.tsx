'use client';

import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline } from 'react-icons/io5'
import { SidebarActions } from '../sidebar-actions/SidebarActions';
import { useUIStore } from '@/store';
import clsx from 'clsx';

export const Sidebar = () => {

  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const closeSideMenu = useUIStore((state) => state.closeSideMenu)
  const openSideMenu = useUIStore((state) => state.openSideMenu)

  return (

    <div>

      {
        isSideMenuOpen && (
          <>
            {/* Poner la pantalla oscura con opacidad*/}
            < div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
            {/* Poner borrosa la pantalla*/}
            <div onClick={() => closeSideMenu()}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm  " />
            {/* Contenido del sidebar*/}
          </>
        )
      }

      <nav 
      className={
        clsx("fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {'translate-x-full': !isSideMenuOpen}
        )
      }>

        

        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />

        <div className='relative mt-14'>
          <IoSearchOutline
            size={20}
            className='absolute top-2 left-2'
          />
          <input type='text' placeholder='Buscar'
            className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
          />
        </div>

        <SidebarActions name='Mi perfil' icon={IoPersonOutline} />
        <SidebarActions name='Ingresar' icon={IoLogInOutline} />
        <SidebarActions name='Salir' icon={IoLogOutOutline} />
        <SidebarActions name='Órdenes' icon={IoTicketOutline} />
        <SidebarActions name='Usuarios' icon={IoPeopleOutline} />

      </nav>


    </div>

  )
}
