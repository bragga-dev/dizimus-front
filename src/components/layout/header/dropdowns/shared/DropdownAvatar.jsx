/**
 * DropdownAvatar
 * Wrapper circular para ícone/imagem de avatar nos cabeçalhos dos dropdowns.
 *
 * @param {React.ReactNode} children - Ícone ou <img> do usuário
 * @param {"sm" | "md" | "lg"}  [size] - Tamanho do avatar. Padrão: "md"
 * @param {string} [className] - Classes extras
 */
const sizeMap = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

export default function DropdownAvatar({ children, size = "md", className = "" }) {
  return (
    <div
      className={`
        flex items-center justify-center rounded-full
        bg-white/10 ring-2 ring-white/20
        ${sizeMap[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
