// LogoIcon.jsx - Versão simples e limpa
export default function LogoIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="#E0B14A"
        strokeWidth="3"
      />
      
      {/* Cruz */}
      <path
        d="M32 16V48"
        stroke="#E0B14A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 30H44"
        stroke="#E0B14A"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}