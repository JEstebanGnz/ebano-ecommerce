"use client";

import { useUIStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const [isDropdownOpen, setDropdownShow] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[var(--primary)] text-white shadow-md z-50 flex items-center justify-between px-6 py-3">

      {/* Logo de Ébano */}
      <div className="flex-1">
        <Link href="/">
        <Image
          src="/imgs/logo.png" 
          alt="Casa Ébano Logo"
          width={180} // Ajusta según sea necesario
          height={60} // Ajusta según sea necesario
          priority
        />
        </Link>
      </div>

      {/* Botones del menú */}
      <div className="hidden sm:flex flex-1 justify-center space-x-6 text-lg font-bold">
        <Link href="/hosting" className="p-2 rounded-md transition-all hover:bg-green-700 hover:text-white">
          Planes
        </Link>
        <Link href="/services" className="p-2 rounded-md transition-all hover:bg-green-700 hover:text-white">
          Hospedaje Rural
        </Link>
        <Link href="/services" className="p-2 rounded-md transition-all hover:bg-green-700 hover:text-white">
          Gastronomía
        </Link>
        <Link href="/services" className="p-2 rounded-md transition-all hover:bg-green-700 hover:text-white">
          Contacto
        </Link>
      </div>

      {/* Redes Sociales */}
      <div className="flex-1 flex justify-end items-center space-x-5">
        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook size={35} className="hover:text-yellow-500 transition-all" />
        </Link>

        <Link href="https://www.instagram.com/ebano.original/" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram size={35} className="hover:text-yellow-500 transition-all" />
        </Link>

        <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp size={35} className="hover:text-yellow-500 transition-all" />
        </Link>
      </div>
    </nav>
  );
};
