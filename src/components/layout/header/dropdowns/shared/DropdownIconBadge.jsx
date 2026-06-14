/**
 * DropdownIconBadge
 * Ícone com fundo em quadrado arredondado usado nos itens de menu dos dropdowns.
 * Aplica automaticamente os estilos de hover do grupo pai.
 *
 * @param {React.ElementType} icon       - Componente de ícone Lucide
 * @param {number}  [iconSize]           - Tamanho do ícone em px. Padrão: 18
 * @param {"sm" | "md" | "lg" | "xl"} [size]   - Tamanho do badge. Padrão: "md"
 * @param {"purple" | "red" | "green" | "amber" | "blue"} [variant] - Paleta de cor. Padrão: "purple"
 * @param {string}  [className]          - Classes extras
 */

const sizes = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

const variants = {
  purple: "bg-ecclesia-50 text-ecclesia-600 group-hover:bg-white/20 group-hover:text-white",
  red:    "bg-red-50 text-red-400 group-hover:bg-red-100",
  green:  "bg-green-50 text-green-600 group-hover:bg-white/20 group-hover:text-white",
  amber:  "bg-amber-50 text-amber-500 group-hover:bg-white/20 group-hover:text-white",
  blue:   "bg-blue-50 text-blue-500 group-hover:bg-white/20 group-hover:text-white",
};

export default function DropdownIconBadge({
  icon: Icon,
  iconSize = 18,
  size = "md",
  variant = "purple",
  className = "",
}) {
  return (
    <div
      className={`
        flex items-center justify-center rounded-lg
        transition-all duration-200
        ${sizes[size] ?? sizes.md}
        ${variants[variant] ?? variants.purple}
        ${className}
      `}
    >
      <Icon size={iconSize} />
    </div>
  );
}