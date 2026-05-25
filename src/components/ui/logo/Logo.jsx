// Logo.jsx - CORRIGIDO para ficar igual ao seu PNG
import LogoIcon from './LogoIcon';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <LogoIcon />

      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-wider text-[#E0B14A]">
          DIZIMUS
        </span>

        <span className="text-[10px] text-zinc-400 tracking-wide">
          GESTÃO QUE HONRA A FÉ.
        </span>
      </div>
    </div>
  );
}