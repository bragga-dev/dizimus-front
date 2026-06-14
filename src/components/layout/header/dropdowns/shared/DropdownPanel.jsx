/**
 * DropdownPanel
 * Container principal do dropdown — posicionamento, sombra, borda e animação
 * padronizados para todos os dropdowns do header.
 *
 * @param {React.ReactNode} children  - Conteúdo interno
 * @param {"sm" | "md" | "lg"} [width] - Largura do painel. Padrão: "md"
 * @param {"right" | "left"} [align]  - Alinhamento horizontal. Padrão: "right"
 * @param {string} [className]        - Classes extras
 */
const widthMap = {
  sm: "w-72",
  md: "w-80",
  lg: "w-96",
};

const alignMap = {
  right: "right-0",
  left:  "left-0",
};

export default function DropdownPanel({
  children,
  width = "md",
  align = "right",
  className = "",
}) {
  return (
    <div
      className={`
        absolute ${alignMap[align]} top-[calc(100%+10px)] z-50
        ${widthMap[width]}
        overflow-hidden
        rounded-2xl
        border border-ecclesia-300/30
        bg-white
        shadow-[0_8px_40px_rgba(103,61,230,0.18)]
        animate-in fade-in slide-in-from-top-2 duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
