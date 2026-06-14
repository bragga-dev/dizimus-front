/**
 * DropdownFooter
 * Rodapé com divisória superior, usado em UserDropdown (logout) e
 * NotificationDropdown ("Ver todas").
 *
 * @param {React.ReactNode} children - Conteúdo do rodapé
 * @param {string} [className]       - Classes extras
 */
export default function DropdownFooter({ children, className = "" }) {
  return (
    <div className={`border-t border-gray-100 p-2 ${className}`}>
      {children}
    </div>
  );
}
