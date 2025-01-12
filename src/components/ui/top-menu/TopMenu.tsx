'use client'

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from 'react-icons/io5'

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu)
  const { isProductsDropdownOpen, toggleProductsDropdown } = useUIStore();

  return (
    <nav className="flex px-5 justify-between w-full py-3 bg-white">
      {/* Logo de Ébano*/}
      <div className="my-5">
        <Link href="/" >
          <span className={`font-bold antialiased`}>
            Ébano
          </span>
        </Link>
      </div>

      {/* Botones de la mitad de la pantalla*/}

      <div className="hidden sm:block mt-4">
        <Link href="/hosting" className="p-2 m-2 hover:bg-slate-200 rounded-md transition-all">Hospedaje</Link>
        <Link href="/services" className="p-2 m-2 hover:bg-slate-200 rounded-md transition-all">Servicios</Link>

        {/* Products button with hover dropdown */}
        <div className="relative inline-block group">
          <Link href="/products"
            className="p-2 m-2 hover:bg-slate-200 rounded-md transition-all cursor-pointer"
          >
            Productos
          </Link>

          {/* Dropdown menu */}
          <div className="absolute left-0 bg-white shadow-lg rounded-md mt-1 p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <Link
              href="/category/amazonian_snacks"
              className="block p-2 hover:bg-slate-200 rounded-md transition-all"
            >
              Snacks
            </Link>
            <Link
              href="/category/artisanal_chocolate"
              className="block p-2 hover:bg-slate-200 rounded-md transition-all"
            >
              Chocolate Artesanal
            </Link>
          </div>
        </div>
      </div>

      {/*Ícono del carrito y menú*/}

      <div className="flex items-center">
        <Link href='/cart'>
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-600 text-white">
              2
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="ml-3 rounded-md hover:bg-slate-200"
          onClick={() => openSideMenu()}
        >
          Menú
        </button>


      </div>

    </nav>
  );
};
