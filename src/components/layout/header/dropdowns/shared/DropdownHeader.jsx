/**
 * DropdownHeader
 * Cabeçalho padrão dos dropdowns com gradiente da marca Ecclesia.
 * Usado em UserDropdown e NotificationDropdown.
 *
 * @param {React.ReactNode} avatar    - Slot para avatar/ícone do usuário
 * @param {React.ReactNode} title     - Título principal (nome, "Notificações", etc.)
 * @param {React.ReactNode} [subtitle] - Subtítulo opcional (e-mail, contagem, etc.)
 * @param {React.ReactNode} [actions] - Ações à direita (botões "marcar como lido", etc.)
 * @param {"sm" | "md"}    [size]    - Densidade do padding. Padrão: "md"
 */
export default function DropdownHeader({
  avatar,
  title,
  subtitle,
  actions,
  size = "md",
}) {
  const padding = size === "sm" ? "px-5 py-4" : "px-6 py-5";

  return (
    <div
      className={`
        bg-gradient-to-br from-ecclesia-800 to-ecclesia-900
        ${padding}
        flex items-center justify-between gap-3
      `}
    >
      {/* Left: avatar + text */}
      <div className="flex items-center gap-3 min-w-0">
        {avatar && <div className="shrink-0">{avatar}</div>}

        <div className="min-w-0">
          {/* Title */}
          <div className="flex items-center gap-2">
            {typeof title === "string" ? (
              <p className="font-navbar font-bold text-white text-base leading-tight truncate">
                {title}
              </p>
            ) : (
              title
            )}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-ecclesia-300 text-xs mt-0.5 font-sans truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right: actions */}
      {actions && <div className="flex items-center gap-1 shrink-0">{actions}</div>}
    </div>
  );
}
