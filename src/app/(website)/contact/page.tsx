export default function ContactPage() {
    return (
      <main className="min-h-screen flex flex-col items-center px-4 py-2">
        <div className="w-full max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold text-center">Hablemos 🌿</h1>
          <p className="text-lg text-center">
            Sabemos lo importante que es para ti sentirte escuchado. Si tienes preguntas, ideas o simplemente quieres saber más, este espacio es para ti. ¡Estamos felices de leerte!
          </p>
  
          <form className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block mb-1 font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
  
            <div>
              <label htmlFor="correo" className="block mb-1 font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
  
            <div>
              <label htmlFor="mensaje" className="block mb-1 font-medium">
                ¿Qué te gustaría contarnos?
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                required
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black resize-y focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-[var(--highlight)] hover:bg-[var(--primary)] text-white font-semibold rounded-md transition-all"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </main>
    );
  }