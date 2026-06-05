// LogoIcon.jsx — Catedral dourada (baseado no SVG que você enviou)

export default function LogoIcon() {
  return (
    <div className="w-[42px] h-[42px] flex items-center justify-center">
      <img
        src="/notre-dame-paris-svgrepo-com.svg"
        alt="Ecclesia Logo"
        className="
          w-full
          h-full
          object-contain
          brightness-0
          sepia
          saturate-[400%]
          hue-rotate-[10deg]
        "
        style={{
          filter:
            "brightness(0) saturate(100%) invert(75%) sepia(44%) saturate(787%) hue-rotate(356deg) brightness(98%) contrast(91%)",
        }}
      />
    </div>
  );
}