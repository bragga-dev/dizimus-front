import LogoIcon from './LogoIcon'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <LogoIcon className="w-6 h-6" />

      <span
        className="
          font-ecclesia
          text-2xl
          font-bold
          tracking-[0.18em]
          text-[#ffffff]
        "
      >
        ECCLESIA
      </span>
    </div>
  )
}
