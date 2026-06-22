import {
  User,
  Settings,
  ChurchIcon,
  LayoutDashboard,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react";

export const userMenuItems = [
  {
    group: "Conta",
    items: [
      {
        label: "Meu Perfil",
        href: "/perfil",
        icon: User,
      },
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    group: "Gestão",
    items: [
      {
        label: "Minha Igreja",
        href: "/igreja",
        icon: ChurchIcon,
      },
      {
        label: "Assinatura",
        href: "/assinatura",
        icon: CreditCard,
      },
      {
        label: "Configurações",
        href: "/configuracoes",
        icon: Settings,
      },
    ],
  },
  {
    group: "Suporte",
    items: [
      {
        label: "Ajuda",
        href: "/ajuda",
        icon: HelpCircle,
      },
    ],
  },
];

export const logoutItem = {
  label: "Sair",
  icon: LogOut,
};