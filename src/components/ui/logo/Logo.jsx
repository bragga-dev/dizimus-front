import LogoIcon from './LogoIcon'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <LogoIcon />

      <span
        className="
          font-ecclesia
          text-3xl
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