/**
 * DropdownOverlay
 * Fundo transparente clicável que fecha o dropdown ao clicar fora.
 *
 * @param {() => void} onClose - Callback de fechamento
 * @param {string} [className] - Classes extras caso necessário
 */
export default function DropdownOverlay({ onClose, className = "" }) {
  return (
    <div
      className={`fixed inset-0 z-40 ${className}`}
      aria-hidden="true"
      onClick={onClose}
    />
  );
}
