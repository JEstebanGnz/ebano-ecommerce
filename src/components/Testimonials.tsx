'use client'

import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonios = [
    { nombre: "Andrea R.", comentario: "Un lugar increíble, rodeado de naturaleza pura. El sonido del río por la noche es mágico. Definitivamente volveré." },
    { nombre: "Carlos M.", comentario: "Casa Ébano es el sitio perfecto para desconectar del estrés. La comida es deliciosa y el ambiente muy acogedor." },
    { nombre: "Sofía L.", comentario: "No sabía que existía un lugar tan hermoso en Florencia, Caquetá. Lo recomiendo al 100%." },
    { nombre: "Daniel P.", comentario: "El mejor lugar para relajarse y disfrutar de la naturaleza. Atención de primera calidad." },
    { nombre: "Mariana G.", comentario: "Un refugio perfecto para escaparse del ruido de la ciudad. Me encantó cada detalle del lugar." },
    { nombre: "Fernando T.", comentario: "Una experiencia maravillosa. El personal es muy amable y el entorno espectacular." },
    { nombre: "Gabriela S.", comentario: "Totalmente recomendado. Volveré sin dudarlo." },
    { nombre: "Luis C.", comentario: "Un destino perfecto para desconectarse y disfrutar de la tranquilidad." }
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-gray-100 relative">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Lo que dicen nuestros visitantes</h2>
            <div className="relative max-w-5xl mx-auto">
            <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 25 },
                    }}
                >
                    {testimonios.map((testimonio, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center">
                                <div className="flex justify-center gap-1 text-yellow-500 mb-2 text-xl">
                                    {[...Array(5)].map((_, i) => <IoStar key={i} />)}
                                </div>
                                <p className="text-gray-800 italic text-lg leading-relaxed font-medium">
                                    "{testimonio.comentario}"
                                </p>
                                <h4 className="mt-2 text-xl font-bold text-gray-900">{testimonio.nombre}</h4>
                                <span className="text-gray-500 text-sm">Google</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
