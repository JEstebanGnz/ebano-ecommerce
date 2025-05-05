"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TwoYearsCelebration() {
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    const [showVideo, setShowVideo] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const startExperience = () => {
        setReady(true);
        setLoading(true);

        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch((e) => {
                console.warn("Autoplay bloqueado", e);
            });
        }

        setTimeout(() => {
            // ⏹️ Pausar música antes de mostrar el video
            if (audioRef.current) {
                audioRef.current.pause();
            }

            setLoading(false);
            setShowVideo(true);
        }, 8000);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch((e) => {
                console.warn("Autoplay blocked:", e);
            });
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4 text-center">
            {/* Música de fondo */}
            <audio ref={audioRef} src="/song.mp3" loop />

            {/* Panel de control de música */}
            {ready && (
                <div className="fixed top-4 right-4 bg-white border border-pink-300 rounded-xl p-4 shadow-md z-50 flex items-center gap-3">
                    <button
                        onClick={() => {
                            if (audioRef.current?.paused) {
                                audioRef.current.play();
                                setIsPlaying(true);
                            } else {
                                audioRef.current?.pause();
                                setIsPlaying(false);
                            }
                        }}
                        className="text-pink-600 hover:text-pink-800 transition-colors text-sm font-medium"
                    >
                        🎵 {isPlaying ? "Pausar" : "Reanudar"}
                    </button>

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        defaultValue={0.4}
                        onChange={(e) => {
                            if (audioRef.current) {
                                audioRef.current.volume = parseFloat(e.target.value);
                            }
                        }}
                        className="w-24"
                    />
                </div>
            )}

            {/* Pantalla inicial */}
            {!ready && (
                <div>
                    <h1 className="text-3xl font-semibold mb-6 text-pink-700">
                        ¡Hola mi amor lindo! 💖
                    </h1>
                    <p className="text-gray-700 mb-4 text-lg">
                        Este regalito es para ti por nuestros 2 años juntos.
                    </p>
                    <button
                        onClick={startExperience}
                        className="bg-pink-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-pink-700 transition-all"
                    >
                        Estoy lista 💌
                    </button>
                </div>
            )}

            {/* Corazón cargando */}
            {loading && (
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-bold text-pink-600 mb-4">
                        Dos años, un corazón ❤️
                    </h2>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-red-500 text-6xl"
                    >
                        ❤️
                    </motion.div>
                    <p className="text-xl mt-4 text-gray-700">
                        Cargando tu sorpresa...
                    </p>
                </div>
            )}

            {/* Video final */}
            {showVideo && (

                <>
                    <h1 className="text-2xl font-bold text-pink-600 mb-4">Dos años construyendo nuestra historia </h1>
                    <div className="w-full max-w-2xl aspect-video mt-8">
                        <iframe
                            className="rounded-2xl w-full h-full shadow-lg"
                            src="https://www.youtube.com/embed/ll5qIVbwiDk?autoplay=1"
                            title="Video de Aniversario"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p className="mt-4 text-center text-lg text-gray-600">
                            Feliz aniversario, mi amor 💕
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}