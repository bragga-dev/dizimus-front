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
        description: "Dados pessoais e foto",
      },
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        description: "Visão geral da sua igreja",
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
        description: "Configurações da igreja",
      },
      {
        label: "Assinatura",
        href: "/assinatura",
        icon: CreditCard,
        description: "Plano e pagamentos",
        badge: "Pro",
      },
      {
        label: "Configurações",
        href: "/configuracoes",
        icon: Settings,
        description: "Preferências da conta",
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
        description: "Tutoriais e suporte",
      },
    ],
  },
];

export const logoutItem = {
  label: "Sair",
  icon: LogOut,
};