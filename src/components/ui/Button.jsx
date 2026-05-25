export default function Button({ children }) {
  return (
    <button
      className="
        rounded-2xl
        bg-gradient-to-r
        from-[#7B61D6]
        to-[#9D7BFF]
        px-5 py-3
        font-semibold text-white
        shadow-xl shadow-purple-900/20
        transition-all
        hover:scale-[1.02]
      "
    >
      {children}
    </button>
  )
}