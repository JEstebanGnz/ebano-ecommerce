import Link from "next/link";

export default function HeroSection() {
   return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imgs/hero.webp')" }} // Asegúrate de tener una imagen en /public/images/hero.jpg
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl">
        <h1 className="text-5xl sm:text-6xl font-bold">Desconéctate del ruido, conéctate con la naturaleza.</h1>
        <p className="mt-4 text-lg sm:text-xl">Un refugio en medio de la selva amazónica, donde el río canta y el alma descansa.</p>
        <Link href="/reserva">
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-md transition-all">
            Reserva tu experiencia
          </button>
        </Link>
      </div>
    </section>
   )

}