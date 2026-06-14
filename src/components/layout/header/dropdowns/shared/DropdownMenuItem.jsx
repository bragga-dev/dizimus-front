/**
 * DropdownMenuItem
 * Item genérico de menu para dropdowns — suporta link (<a>) e botão (<button>).
 * Aplica o padrão visual hover da marca (fundo ecclesia-600 com textos brancos).
 *
 * @param {React.ReactNode}  children    - Conteúdo interno (normalmente DropdownIconBadge + texto)
 * @param {string}           [href]      - Se fornecido, renderiza como <a>
 * @param {() => void}       [onClick]   - Callback de clique
 * @param {"default" | "danger"} [variant] - Tema de cor. Padrão: "default"
 * @param {boolean}          [asButton]  - Força renderização como <button> mesmo sem onClick
 * @param {string}           [className] - Classes extras
 */
const hoverTheme = {
  default: "hover:bg-ecclesia-600",
  danger:  "hover:bg-red-50",
};

export default function DropdownMenuItem({
  children,
  href,
  onClick,
  variant = "default",
  asButton = false,
  className = "",
}) {
  const base = `
    group flex items-center gap-3
    rounded-xl px-4 py-3 w-full
    transition-all duration-200
    ${hoverTheme[variant]}
    ${className}
  `;

  if (href && !asButton) {
    return (
      <a href={href} onClick={onClick} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {children}
    </button>
  );
}
