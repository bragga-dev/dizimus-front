/**
 * DropdownAvatar
 * Exibe foto do usuário se disponível, senão mostra o children (ícone fallback).
 *
 * @param {React.ReactNode} children   - Ícone fallback quando não há foto
 * @param {string}          [photoUrl] - URL da foto vinda de user.photo_url
 * @param {string}          [alt]      - Alt text da imagem
 * @param {"sm"|"md"|"lg"}  [size]     - Tamanho. Padrão: "md"
 * @param {string}          [className]
 */
const sizeMap = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

export default function DropdownAvatar({
  children,
  photoUrl,
  alt = "Foto do usuário",
  size = "md",
  className = "",
}) {
  return (
    <div
      className={`
        flex items-center justify-center rounded-full overflow-hidden
        bg-white/10 ring-2 ring-white/20
        ${sizeMap[size]}
        ${className}
      `}
    >
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            // Se a imagem falhar, esconde e mostra o ícone
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling?.style.removeProperty("display");
          }}
        />
      ) : null}

      {/* Ícone fallback — visível quando não há foto ou imagem falha */}
      <span style={{ display: photoUrl ? "none" : undefined }}>
        {children}
      </span>
    </div>
  );
}