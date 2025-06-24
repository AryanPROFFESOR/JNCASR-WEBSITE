'use client'

import { useEffect } from 'react'
import ParticleCanvas from '@/components/ParticleCanvas'

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement
    const moveCursor = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`
      cursor.style.left = `${e.clientX}px`
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <ParticleCanvas />

      {/* Custom cursor */}
      <div className="cursor" />

      {/* Overlay Text */}
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
          Welcome to Our Research Lab
        </h1>
        <p className="text-xl max-w-2xl drop-shadow-md">
          Exploring the frontiers of AI, neuroscience, and material science.
        </p>
      </div>
    </div>
  )
}
