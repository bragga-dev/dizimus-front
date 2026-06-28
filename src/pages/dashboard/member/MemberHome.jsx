// src/pages/dashboard/member/MemberHome.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Pencil,
  Camera,
  Trash2,
  X,
  Check,
  Loader2,
  ChevronDown,
  Calendar,
  Shield,
  AlertCircle,
  Plus,
  Home,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  getMemberProfile,
  updateMemberProfile,
  uploadMemberPhoto,
  deleteMemberPhoto,
  getMemberAddresses,
  createMemberAddress,
  updateMemberAddress,
  deleteMemberAddress,
} from "@/services/api/member";

// ── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function formatCPF(cpf) {
  if (!cpf) return null;
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11) return cpf;
  return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatPhone(phone) {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11)
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  if (digits.length === 10)
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  return phone;
}

// ── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border text-sm font-medium transition-all animate-slide-up ${
        type === "success"
          ? "bg-[#1a0030] border-[#E0B14A]/30 text-white"
          : "bg-[#1a0030] border-red-500/30 text-red-300"
      }`}
    >
      {type === "success" ? (
        <Check size={16} className="text-[#E0B14A] flex-shrink-0" />
      ) : (
        <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
      )}
      {message}
      <button onClick={onClose} className="ml-2 text-white/40 hover:text-white">
        <X size={14} />
      </button>
    </div>
  );
}

// ── Modal base ───────────────────────────────────────────────────────────────

function Modal({ title, onClose, children, size = "md" }) {
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const widths = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative w-full ${widths[size]} bg-gradient-to-b from-[#1e0035] to-[#0c0620] border border-[#E0B14A]/15 rounded-t-3xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.6)] max-h-[92vh] overflow-y-auto`}
      >
        {/* Handle mobile */}
        <div className="flex sm:hidden justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h2
            className="text-base font-semibold text-white"
            style={{ fontFamily: "var(--font-navbar)" }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ── Campo de formulário ──────────────────────────────────────────────────────

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  hint,
  required,
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
        {label}
        {required && <span className="text-[#E0B14A] ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#E0B14A]/50 focus:bg-white/8 transition-all"
      />
      {hint && <p className="mt-1 text-xs text-white/30">{hint}</p>}
    </div>
  );
}

// ── Select de formulário ─────────────────────────────────────────────────────

function SelectField({ label, name, value, onChange, options, placeholder }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value ?? ""}
          onChange={onChange}
          className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E0B14A]/50 transition-all pr-10"
        >
          <option value="" className="bg-[#1e0035]">
            {placeholder ?? "Selecione..."}
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
  );
}

// ── Botão salvar ─────────────────────────────────────────────────────────────

function SaveButton({ loading, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E0B14A] to-[#c8973a] text-[#0c0620] font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-all"
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <Check size={16} />
      )}
      {loading ? "Salvando..." : "Salvar alterações"}
    </button>
  );
}

// ── Info line ────────────────────────────────────────────────────────────────

function InfoLine({ icon: Icon, label, value, empty = "Não informado" }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
        <Icon size={14} className="text-[#E0B14A]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">
          {label}
        </p>
        <p
          className={`text-sm mt-0.5 ${value ? "text-white" : "text-white/25 italic"}`}
        >
          {value || empty}
        </p>
      </div>
    </div>
  );
}

// ── Card de seção ────────────────────────────────────────────────────────────

function SectionCard({
  title,
  icon: Icon,
  onEdit,
  editLabel = "Editar",
  children,
  badge,
}) {
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E0B14A]/10">
            <Icon size={15} className="text-[#E0B14A]" />
          </div>
          <h3
            className="text-sm font-semibold text-white"
            style={{ fontFamily: "var(--font-navbar)" }}
          >
            {title}
          </h3>
          {badge}
        </div>
        {onEdit && (
          <button
            onClick={onEdit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white/50 hover:text-white hover:bg-white/8 border border-transparent hover:border-white/10 transition-all"
          >
            <Pencil size={12} />
            <span className="hidden sm:inline">{editLabel}</span>
          </button>
        )}
      </div>
      <div className="px-5 py-2">{children}</div>
    </div>
  );
}

// ── Modal: Foto ──────────────────────────────────────────────────────────────

function PhotoModal({ photoUrl, onClose, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [removing, setRemoving] = useState(false);
  const fileRef = useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const updated = await uploadMemberPhoto(file);
      onUpdate(updated);
    } catch {
      // silencia — toast fica no parent
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    setRemoving(true);
    try {
      const updated = await deleteMemberPhoto();
      onUpdate(updated);
    } catch {
      //
    } finally {
      setRemoving(false);
    }
  };

  return (
    <Modal title="Foto de perfil" onClose={onClose} size="sm">
      {/* Preview */}
      <div className="flex justify-center mb-6">
        <div className="relative w-28 h-28">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Foto de perfil"
              className="w-full h-full rounded-2xl object-cover border-2 border-[#E0B14A]/20"
            />
          ) : (
            <div className="w-full h-full rounded-2xl bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center">
              <User size={36} className="text-white/20" />
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-xs text-white/30 mb-4">
        JPG, JPEG, PNG ou WEBP · máx. 5 MB
      </p>

      <div className="space-y-2">
        <button
          onClick={() => fileRef.current?.click()}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E0B14A]/10 border border-[#E0B14A]/20 text-[#E0B14A] text-sm font-medium hover:bg-[#E0B14A]/15 transition-all disabled:opacity-50"
        >
          {loading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Camera size={16} />
          )}
          {loading ? "Enviando..." : photoUrl ? "Alterar foto" : "Enviar foto"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          className="hidden"
          onChange={handleFile}
        />

        {photoUrl && (
          <button
            onClick={handleRemove}
            disabled={removing}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/15 transition-all disabled:opacity-50"
          >
            {removing ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Trash2 size={16} />
            )}
            {removing ? "Removendo..." : "Remover foto"}
          </button>
        )}
      </div>
    </Modal>
  );
}

// ── Modal: Dados Pessoais ────────────────────────────────────────────────────

function PersonalModal({ profile, onClose, onSave }) {
  const [form, setForm] = useState({
    first_name: profile?.first_name ?? "",
    last_name: profile?.last_name ?? "",
    cpf: profile?.cpf ?? "",
    date_of_birth: profile?.date_of_birth ?? "",
    // Campos futuros (backend ainda não suporta — prontos para receber)
    gender: profile?.gender ?? "",
    marital_status: profile?.marital_status ?? "",
    profession: profile?.profession ?? "",
  });
  const [loading, setLoading] = useState(false);

  const set = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    setLoading(true);
    try {
      // Envia só o que a API aceita (campos futuros serão ignorados pelo backend por enquanto)
      const payload = {
        first_name: form.first_name,
        last_name: form.last_name,
        cpf: form.cpf,
        date_of_birth: form.date_of_birth || undefined,
      };
      const updated = await updateMemberProfile(payload);
      onSave(updated);
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="Dados pessoais" onClose={onClose} size="md">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Nome"
            name="first_name"
            value={form.first_name}
            onChange={set}
            placeholder="João"
          />
          <Field
            label="Sobrenome"
            name="last_name"
            value={form.last_name}
            onChange={set}
            placeholder="Silva"
          />
        </div>
        <Field
          label="CPF"
          name="cpf"
          value={form.cpf}
          onChange={set}
          placeholder="000.000.000-00"
          hint="Apenas números"
        />
        <Field
          label="Data de nascimento"
          name="date_of_birth"
          value={form.date_of_birth}
          onChange={set}
          type="date"
        />

        {/* Campos futuros — visualmente presentes, aguardando API */}
        <div className="pt-2 border-t border-white/5">
          <p className="text-xs text-white/25 mb-3 uppercase tracking-wider font-semibold">
            Em breve
          </p>
          <div className="grid grid-cols-2 gap-3 opacity-40 pointer-events-none select-none">
            <SelectField
              label="Sexo"
              name="gender"
              value={form.gender}
              onChange={set}
              options={[
                { value: "M", label: "Masculino" },
                { value: "F", label: "Feminino" },
                { value: "O", label: "Outro" },
              ]}
            />
            <SelectField
              label="Estado civil"
              name="marital_status"
              value={form.marital_status}
              onChange={set}
              options={[
                { value: "single", label: "Solteiro(a)" },
                { value: "married", label: "Casado(a)" },
                { value: "divorced", label: "Divorciado(a)" },
                { value: "widowed", label: "Viúvo(a)" },
              ]}
            />
          </div>
          <div className="mt-3 opacity-40 pointer-events-none select-none">
            <Field
              label="Profissão"
              name="profession"
              value={form.profession}
              onChange={set}
              placeholder="Ex: Engenheiro"
            />
          </div>
        </div>

        <SaveButton loading={loading} onClick={handleSave} />
      </div>
    </Modal>
  );
}

// ── Modal: Contato ───────────────────────────────────────────────────────────

function ContactModal({ profile, email, onClose, onSave }) {
  const [form, setForm] = useState({
    phone: profile?.phone ?? "",
    username: profile?.username ?? "",
  });
  const [loading, setLoading] = useState(false);
  const set = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    setLoading(true);
    try {
      const updated = await updateMemberProfile({
        phone: form.phone,
        username: form.username,
      });
      onSave(updated);
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="Informações de contato" onClose={onClose} size="sm">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
            E-mail
          </label>
          <div className="flex items-center gap-2 w-full bg-white/3 border border-white/8 rounded-xl px-4 py-2.5">
            <Mail size={14} className="text-white/25 flex-shrink-0" />
            <span className="text-sm text-white/40 truncate">{email}</span>
          </div>
          <p className="mt-1 text-xs text-white/25">
            Alterado em Configurações de conta
          </p>
        </div>
        <Field
          label="Telefone"
          name="phone"
          value={form.phone}
          onChange={set}
          placeholder="(00) 00000-0000"
          type="tel"
        />
        <Field
          label="Nome de usuário"
          name="username"
          value={form.username}
          onChange={set}
          placeholder="@seuusuario"
          hint="Usado na URL pública do seu perfil"
        />
        <SaveButton loading={loading} onClick={handleSave} />
      </div>
    </Modal>
  );
}

// ── Modal: Endereço ──────────────────────────────────────────────────────────

function AddressModal({ address, onClose, onSave }) {
  const isNew = !address?.id;
  const [form, setForm] = useState({
    cep: address?.cep ?? "",
    road: address?.road ?? "",
    number: address?.number ?? "",
    district: address?.district ?? "",
    city: address?.city ?? "",
    state: address?.state ?? "",
    country: address?.country ?? "Brasil",
    complement: address?.complement ?? "",
    principal: address?.principal ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const set = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Auto-fill via ViaCEP
  const handleCEPBlur = async () => {
    const digits = form.cep.replace(/\D/g, "");
    if (digits.length !== 8) return;
    setCepLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const d = await res.json();
      if (!d.erro) {
        setForm((f) => ({
          ...f,
          road: d.logradouro || f.road,
          district: d.bairro || f.district,
          city: d.localidade || f.city,
          state: d.uf || f.state,
        }));
      }
    } catch {
      /* silencia */
    } finally {
      setCepLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let updated;
      if (isNew) {
        updated = await createMemberAddress(form);
      } else {
        updated = await updateMemberAddress(address.id, form);
      }
      onSave(updated);
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };

  const STATES = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ].map((s) => ({ value: s, label: s }));

  return (
    <Modal
      title={isNew ? "Adicionar endereço" : "Editar endereço"}
      onClose={onClose}
      size="lg"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Field
              label="CEP"
              name="cep"
              value={form.cep}
              onChange={set}
              placeholder="00000-000"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleCEPBlur}
              disabled={cepLoading}
              className="w-full py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all disabled:opacity-40 flex items-center justify-center gap-1.5"
            >
              {cepLoading ? (
                <Loader2 size={13} className="animate-spin" />
              ) : null}
              {cepLoading ? "Buscando..." : "Buscar CEP"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Field
              label="Logradouro"
              name="road"
              value={form.road}
              onChange={set}
              placeholder="Rua, Av., Praça..."
            />
          </div>
          <Field
            label="Número"
            name="number"
            value={form.number}
            onChange={set}
            placeholder="123"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Bairro"
            name="district"
            value={form.district}
            onChange={set}
            placeholder="Centro"
          />
          <Field
            label="Complemento"
            name="complement"
            value={form.complement}
            onChange={set}
            placeholder="Apto, Bloco..."
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Field
              label="Cidade"
              name="city"
              value={form.city}
              onChange={set}
              placeholder="São Paulo"
            />
          </div>
          <SelectField
            label="Estado"
            name="state"
            value={form.state}
            onChange={set}
            options={STATES}
            placeholder="UF"
          />
        </div>

        <SaveButton loading={loading} onClick={handleSave} />
      </div>
    </Modal>
  );
}

// ── Modal: Foto (opções de câmera) ───────────────────────────────────────────
// (Já definido acima como PhotoModal)

// ── Componente principal ─────────────────────────────────────────────────────

export default function MemberHome() {
  const { user, saveSession } = useAuth();
  const [profile, setProfile] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null); // 'photo' | 'personal' | 'contact' | 'address' | 'newAddress'
  const [editAddress, setEditAddress] = useState(null);

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
  }, []);

  const load = useCallback(async () => {
    try {
      const [p, a] = await Promise.all([
        getMemberProfile(),
        getMemberAddresses(),
      ]);
      setProfile(p);
      setAddresses(Array.isArray(a) ? a : []);
    } catch {
      showToast("Erro ao carregar informações", "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    load();
  }, [load]);

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handlePhotoUpdate = (updated) => {
    // Atualiza o profile com a nova foto
    if (updated?.photo_url) {
      setProfile((prev) => ({ ...prev, photo_url: updated.photo_url }));
      // Atualiza o AuthContext
      if (user) {
        const updatedUser = { ...user, photo_url: updated.photo_url };
        // Se tiver um método para atualizar o contexto, use-o
        // Caso contrário, recarregue a sessão
        saveSession &&
          saveSession({
            access: localStorage.getItem("access_token"),
            refresh: localStorage.getItem("refresh_token"),
          });
      }
    }
    setModal(null);
    showToast("Foto atualizada com sucesso");
    load();
  };
  const handleProfileSave = (updated) => {
    setProfile(updated);
    setModal(null);
    showToast("Dados atualizados com sucesso");
  };

  const handleAddressSave = (updated) => {
    setModal(null);
    setEditAddress(null);
    showToast("Endereço salvo com sucesso");
    load();
  };

  const handleDeleteAddress = async (id) => {
    try {
      await deleteMemberAddress(id);
      showToast("Endereço removido");
      load();
    } catch {
      showToast("Erro ao remover endereço", "error");
    }
  };

  // ── Derived ────────────────────────────────────────────────────────────────

  const fullName =
    [profile?.first_name, profile?.last_name].filter(Boolean).join(" ") || null;
  const mainAddress =
    addresses.find((a) => a.principal) ?? addresses[0] ?? null;

  const addressString = mainAddress
    ? [
        mainAddress.road,
        mainAddress.number,
        mainAddress.district,
        mainAddress.city,
        mainAddress.state,
      ]
        .filter(Boolean)
        .join(", ")
    : null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 size={28} className="animate-spin text-[#E0B14A]" />
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.2s ease-out; }
      `}</style>

      <div className="w-full max-w-3xl mx-auto space-y-5 pb-10">
        {/* ── Hero: foto + nome ──────────────────────────────────────────────── */}
        <div className="relative bg-gradient-to-br from-[#2E004F] via-[#1e0035] to-[#0c0620] border border-[#E0B14A]/10 rounded-2xl overflow-hidden">
          {/* Fundo decorativo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E0B14A]/5 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-[#2E004F]/80 blur-2xl" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-5 p-6">
            {/* Avatar */}
            <div className="relative group flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E0B14A]/20 shadow-[0_0_30px_rgba(224,177,74,0.1)]">
                {profile?.photo_url || user?.photo_url ? (
                  <img
                    src={profile?.photo_url || user?.photo_url}
                    alt={fullName || "Foto de perfil"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#E0B14A]/10">
                    <User size={36} className="text-[#E0B14A]/50" />
                  </div>
                )}
              </div>
              {/* Botão câmera */}
              <button
                onClick={() => setModal("photo")}
                className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Alterar foto"
              >
                <Camera size={22} className="text-white" />
              </button>
            </div>

            {/* Info principal */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                {user?.is_trusty && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E0B14A]/10 border border-[#E0B14A]/20 text-[#E0B14A] text-[10px] font-semibold uppercase tracking-wider">
                    <Shield size={10} />
                    Verificado
                  </span>
                )}
              </div>
              <h1
                className="text-xl sm:text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-navbar)" }}
              >
                {fullName || "Membro Ecclesia"}
              </h1>
              {profile?.username && (
                <p className="text-sm text-[#E0B14A]/70 mt-0.5">
                  @{profile.username}
                </p>
              )}
              <p className="text-xs text-white/40 mt-1">
                {user?.role_label ?? "Membro"}
              </p>
            </div>

            {/* Botão editar foto — mobile canto */}
            <button
              onClick={() => setModal("photo")}
              className="sm:hidden absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all"
            >
              <Camera size={15} />
            </button>

            {/* Desktop: botão câmera fora do group hover */}
            <button
              onClick={() => setModal("photo")}
              className="hidden sm:flex h-9 px-4 items-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 text-sm transition-all self-start mt-1"
            >
              <Camera size={14} />
              <span>Alterar foto</span>
            </button>
          </div>
        </div>

        {/* ── Dados Pessoais ─────────────────────────────────────────────────── */}
        <SectionCard
          title="Dados pessoais"
          icon={User}
          onEdit={() => setModal("personal")}
        >
          <InfoLine icon={User} label="Nome completo" value={fullName} />
          <InfoLine
            icon={FileText}
            label="CPF"
            value={formatCPF(profile?.cpf)}
          />
          <InfoLine
            icon={Calendar}
            label="Data de nascimento"
            value={formatDate(profile?.date_of_birth)}
          />
          {/* Campos futuros — exibidos como placeholder */}
          <InfoLine
            icon={User}
            label="Sexo"
            value={profile?.gender ?? null}
            empty="A ser preenchido"
          />
          <InfoLine
            icon={FileText}
            label="Estado civil"
            value={profile?.marital_status ?? null}
            empty="A ser preenchido"
          />
          <InfoLine
            icon={FileText}
            label="Profissão"
            value={profile?.profession ?? null}
            empty="A ser preenchido"
          />
        </SectionCard>

        {/* ── Contato ────────────────────────────────────────────────────────── */}
        <SectionCard
          title="Contato"
          icon={Mail}
          onEdit={() => setModal("contact")}
        >
          <InfoLine icon={Mail} label="E-mail" value={user?.email} />
          <InfoLine
            icon={Phone}
            label="Telefone"
            value={formatPhone(profile?.phone)}
          />
          {profile?.username && (
            <InfoLine
              icon={User}
              label="Usuário"
              value={`@${profile.username}`}
            />
          )}
        </SectionCard>

        {/* ── Endereços ──────────────────────────────────────────────────────── */}
        <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E0B14A]/10">
                <MapPin size={15} className="text-[#E0B14A]" />
              </div>
              <h3
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "var(--font-navbar)" }}
              >
                Endereços
              </h3>
              {addresses.length > 0 && (
                <span className="text-xs text-white/30 font-medium">
                  {addresses.length}{" "}
                  {addresses.length === 1 ? "cadastrado" : "cadastrados"}
                </span>
              )}
            </div>
            <button
              onClick={() => {
                setEditAddress(null);
                setModal("address");
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-[#E0B14A]/70 hover:text-[#E0B14A] hover:bg-[#E0B14A]/5 border border-transparent hover:border-[#E0B14A]/20 transition-all"
            >
              <Plus size={12} />
              <span className="hidden sm:inline">Adicionar</span>
            </button>
          </div>

          <div className="px-5 py-2">
            {addresses.length === 0 ? (
              <div className="py-8 flex flex-col items-center gap-2 text-center">
                <div className="h-12 w-12 rounded-2xl bg-white/3 flex items-center justify-center">
                  <Home size={20} className="text-white/15" />
                </div>
                <p className="text-sm text-white/25">
                  Nenhum endereço cadastrado
                </p>
                <button
                  onClick={() => {
                    setEditAddress(null);
                    setModal("address");
                  }}
                  className="mt-1 text-xs text-[#E0B14A]/60 hover:text-[#E0B14A] transition-colors"
                >
                  Adicionar endereço
                </button>
              </div>
            ) : (
              addresses.map((addr, i) => (
                <div
                  key={addr.id ?? i}
                  className="py-3 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 mt-0.5">
                      <MapPin size={14} className="text-[#E0B14A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm text-white truncate">
                          {[addr.road, addr.number].filter(Boolean).join(", ")}
                        </p>
                        {addr.principal && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#E0B14A]/10 text-[#E0B14A] font-semibold uppercase tracking-wider">
                            Principal
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/40 mt-0.5 truncate">
                        {[addr.district, addr.city, addr.state, addr.cep]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => {
                          setEditAddress(addr);
                          setModal("address");
                        }}
                        className="h-8 px-3 flex items-center gap-1.5 rounded-lg bg-[#E0B14A]/20 border border-[#E0B14A]/30 text-[#E0B14A] hover:bg-[#E0B14A]/30 hover:border-[#E0B14A]/50 transition-all font-medium text-xs"
                        title="Editar endereço"
                      >
                        <Pencil size={13} />
                        <span className="hidden sm:inline">Editar</span>
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(addr.id)}
                        className="h-8 px-3 flex items-center gap-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:border-red-500/50 transition-all font-medium text-xs"
                        title="Remover endereço"
                      >
                        <Trash2 size={13} />
                        <span className="hidden sm:inline">Remover</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── Modais ──────────────────────────────────────────────────────────── */}
      {modal === "photo" && (
        <PhotoModal
          photoUrl={user?.photo_url}
          onClose={() => setModal(null)}
          onUpdate={handlePhotoUpdate}
        />
      )}
      {modal === "personal" && (
        <PersonalModal
          profile={profile}
          onClose={() => setModal(null)}
          onSave={handleProfileSave}
        />
      )}
      {modal === "contact" && (
        <ContactModal
          profile={profile}
          email={user?.email}
          onClose={() => setModal(null)}
          onSave={handleProfileSave}
        />
      )}
      {modal === "address" && (
        <AddressModal
          address={editAddress}
          onClose={() => {
            setModal(null);
            setEditAddress(null);
          }}
          onSave={handleAddressSave}
        />
      )}

      {/* ── Toast ───────────────────────────────────────────────────────────── */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
