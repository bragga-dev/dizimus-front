// src/components/ui/dashboard/FormField.jsx
import { ChevronDown } from 'lucide-react'

const baseInput = [
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5',
  'text-sm text-white placeholder-white/25',
  'focus:outline-none focus:border-[#E0B14A]/50 focus:bg-white/[0.08]',
  'transition-all',
].join(' ')

const labelCls = 'block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5'

/**
 * Campo de texto / date / tel / etc.
 */
export function Field({ label, name, value, onChange, type = 'text', placeholder, hint, required, disabled }) {
  return (
    <div>
      <label className={labelCls}>
        {label}
        {required && <span className="text-[#E0B14A] ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseInput} disabled:opacity-40 disabled:cursor-not-allowed`}
      />
      {hint && <p className="mt-1 text-xs text-white/30">{hint}</p>}
    </div>
  )
}

/**
 * Campo select estilizado.
 */
export function SelectField({ label, name, value, onChange, options, placeholder, disabled }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <div className="relative">
        <select
          name={name}
          value={value ?? ''}
          onChange={onChange}
          disabled={disabled}
          className={`${baseInput} appearance-none pr-10 disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          <option value="" className="bg-[#1e0035]">
            {placeholder ?? 'Selecione...'}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-[#1e0035]">
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
        />
      </div>
    </div>
  )
}