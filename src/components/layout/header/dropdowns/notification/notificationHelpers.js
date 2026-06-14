import { DollarSign, Users, Calendar, AlertCircle, CheckCircle2, Bell } from "lucide-react";

export const NOTIFICATION_TYPES = {
  TITHE:   "tithe",
  MEMBER:  "member",
  EVENT:   "event",
  ALERT:   "alert",
  SUCCESS: "success",
  SYSTEM:  "system",
};

// Paleta adaptada ao fundo branco do dropdown (mesmo padrão do UserDropdown)
export const notificationConfig = {
  [NOTIFICATION_TYPES.TITHE]: {
    icon: DollarSign,
    badgeClass: "bg-amber-50 text-amber-500",
  },
  [NOTIFICATION_TYPES.MEMBER]: {
    icon: Users,
    badgeClass: "bg-ecclesia-50 text-ecclesia-600",
  },
  [NOTIFICATION_TYPES.EVENT]: {
    icon: Calendar,
    badgeClass: "bg-blue-50 text-blue-500",
  },
  [NOTIFICATION_TYPES.ALERT]: {
    icon: AlertCircle,
    badgeClass: "bg-red-50 text-red-400",
  },
  [NOTIFICATION_TYPES.SUCCESS]: {
    icon: CheckCircle2,
    badgeClass: "bg-green-50 text-green-600",
  },
  [NOTIFICATION_TYPES.SYSTEM]: {
    icon: Bell,
    badgeClass: "bg-gray-100 text-gray-400",
  },
};

export const mockNotifications = [
  {
    id: 1,
    type: NOTIFICATION_TYPES.TITHE,
    title: "Dízimo recebido",
    message: "João Pereira registrou um dízimo de R$ 350,00.",
    time: "Agora mesmo",
    read: false,
  },
  {
    id: 2,
    type: NOTIFICATION_TYPES.MEMBER,
    title: "Novo membro cadastrado",
    message: "Ana Souza foi adicionada ao ministério de louvor.",
    time: "15 min atrás",
    read: false,
  },
  {
    id: 3,
    type: NOTIFICATION_TYPES.EVENT,
    title: "Evento amanhã",
    message: "Culto de quarta-feira começa às 19h. 47 confirmados.",
    time: "1h atrás",
    read: false,
  },
  {
    id: 4,
    type: NOTIFICATION_TYPES.ALERT,
    title: "Meta financeira em risco",
    message: "Arrecadação do mês está 23% abaixo da meta.",
    time: "3h atrás",
    read: true,
  },
  {
    id: 5,
    type: NOTIFICATION_TYPES.SUCCESS,
    title: "Relatório gerado",
    message: "Relatório mensal de junho está pronto para download.",
    time: "Ontem",
    read: true,
  },
];

export function getUnreadCount(notifications) {
  return notifications.filter((n) => !n.read).length;
}

export function groupNotificationsByDate(notifications) {
  const today     = notifications.filter((n) => n.time !== "Ontem");
  const yesterday = notifications.filter((n) => n.time === "Ontem");
  const groups = [];
  if (today.length)     groups.push({ label: "Hoje",   items: today });
  if (yesterday.length) groups.push({ label: "Ontem",  items: yesterday });
  return groups;
}