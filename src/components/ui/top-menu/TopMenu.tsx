"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

export const TopMenu = () => {


  return (
<nav className=" w-full bg-[var(--secondary)] text-white shadow-md z-50 flex items-center justify-between px-6 py-1">
{/* ... */}
      {/* Logo de Ébano */}
      <div className="flex-1 ml-5">
        <Link href="/">
        <Image
          src="/imgs/logo_ebano.png" 
          alt="Casa Ébano Logo"
            className="drop-shadow-lg"
          width={100} // Ajusta según sea necesario
          height={60} // Ajusta según sea necesario
          priority
        />
        </Link>
      </div>

      {/* Botones del menú */}
      <div className="hidden sm:flex flex-1 justify-center space-x-6 text-lg font-semibold">
    <Link href="/hosting" className="p-2 rounded-md transition-all hover:bg-[var(--highlight)] hover:text-white">
      Planes
    </Link>
    <Link href="/services" className="p-2 rounded-md transition-all hover:bg-[var(--highlight)] hover:text-white">
      Hospedaje Rural
    </Link>
    <Link href="/services" className="p-2 rounded-md transition-all hover:bg-[var(--highlight)] hover:text-white">
      Gastronomía
    </Link>
    <Link href="/contact" className="p-2 rounded-md transition-all hover:bg-[var(--highlight)] hover:text-white">
      Contacto
    </Link>
  </div>

      {/* Redes Sociales */}
      <div className="flex-1 flex justify-end items-center space-x-5">
    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <IoLogoFacebook size={35} className="hover:text-[var(--accent)] transition-all" />
    </Link>
    <Link href="https://www.instagram.com/ebano.original/" target="_blank" rel="noopener noreferrer">
      <IoLogoInstagram size={35} className="hover:text-[var(--accent)] transition-all" />
    </Link>
    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <IoLogoWhatsapp size={35} className="hover:text-[var(--accent)] transition-all" />
    </Link>
  </div>
    </nav>
  );
};
