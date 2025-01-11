import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";
import {IoCartOutline} from 'react-icons/io5'

export const TopMenu = () => {
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

      <div className="hidden sm:block">
        <Link href="/hosting" className="p-2 m-2 hover:bg-slate-200 rounded-md transition-all">Hospedaje</Link>
        <Link href="/category/services" className="p-2 m-2 hover:bg-slate-200 rounded-md transition-all">Servicios</Link>
        <button id= 'productos' className="p-2 m-2 hover:bg-slate-200 rounded-md transition-all">Productos</button>
      </div>


      {/*Ícono del carrito y menú*/}

      <div className="flex items-center"> 
        <Link href='/cart'>
        <div className="relative"> 
        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-600 text-white"> 
            2
        </span>
        <IoCartOutline className="w-5 h-5"/>
        </div>
        </Link>

        <button className="ml-3 rounded-md">
            Menú
        </button>


      </div>

    </nav>
  );
};
