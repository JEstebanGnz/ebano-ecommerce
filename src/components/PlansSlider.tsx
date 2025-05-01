'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const images = [
  {
    titulo: "Plan Familiar",
    descripcion:
      "Diseñado para dos adultos y dos niños. Disfruten de talleres interactivos, avistamiento de aves en familia y momentos dulces con repostería compartida.",
    imagen: "/imgs/plan_familiar.jpeg",
  },
  {
    titulo: "Plan Pareja",
    descripcion:
      "Una experiencia íntima para reconectarse: meditación al amanecer, cenas especiales y senderos naturales para recorrer juntos.",
    imagen: "/imgs/plan_pareja1.jpeg",
  },
  {
    titulo: "Plan Empresarial",
    descripcion:
      "Fomenta la integración y el bienestar grupal con caminatas guiadas, talleres creativos y espacios de relajación para equipos de trabajo.",
    imagen: "/imgs/plan_empresarial.jpg",
  },
];


export default function PlansSlider () {

return (
    <section className='py-10 px-10'>
      <h1 className="text-4xl font-bold text-center">Nuestros planes</h1>
      <div className='container mx-auto px-4 my-10'>
        <Swiper
          navigation
          autoplay={{ delay: 7000}}
          modules={[Navigation, Autoplay]}
          className='rounded-lg cursor-grab'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
            <div className='relative w-full aspect-[4/3] overflow-hidden rounded-md'>
              <Image
                fill
                priority
                src={image.imagen}
                alt={image.titulo}
                className='object-cover'
              />
              <div className='absolute top-1/2 -translate-y-1/2 left-6 bg-black/60 text-white p-6 rounded-lg max-w-sm space-y-4'>
                <h2 className='text-3xl font-bold'>{image.titulo}</h2>
                <p className='text-xl'>{image.descripcion}</p>
                <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded'>
                  RESERVAR
                </button>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )

}