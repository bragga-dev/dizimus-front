import { ArrowRight, CheckCircle2 } from 'lucide-react'
import capaImg from '@/assets/capaIMG.avif'

export default function Hero() {
  return (
    <>
      {/* ─── COVER PHOTO ─────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(380px, 60vw, 680px)' }}
      >
        <img
          src={capaImg}
          alt="Comunidade em adoração"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(12,6,32,0.55) 0%, rgba(12,6,32,0.30) 40%, rgba(12,6,32,0.85) 100%)',
          }}
        />

        {/* Texto de marketing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span
              className="text-xl font-semibold text-white/90 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              Gestão para igrejas
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-5 max-w-4xl"
            style={{
              fontFamily: 'var(--font-ecclesia)',
              textShadow: '0 2px 24px rgba(0,0,0,0.5)',
            }}
          >
            Mais tempo para o ministério.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8b63ff, #e0a020)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Menos tempo com operações.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-base sm:text-lg text-white/75 max-w-xl mb-8 leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            Membros, dízimos, eventos e comunicação — tudo em um só lugar.
            Para você gastar energia onde ela realmente importa.
          </p>


        </div>

      </section>

     
    </>
  )
}