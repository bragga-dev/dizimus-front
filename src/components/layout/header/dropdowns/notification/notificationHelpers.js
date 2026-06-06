import { DollarSign, Users, Calendar, AlertCircle, CheckCircle2, Bell } from "lucide-react";

// Tipos de notificação da plataforma eclesiástica
export const NOTIFICATION_TYPES = {
  TITHE: "tithe",
  MEMBER: "member",
  EVENT: "event",
  ALERT: "alert",
  SUCCESS: "success",
  SYSTEM: "system",
};

export const notificationConfig = {
  [NOTIFICATION_TYPES.TITHE]: {
    icon: DollarSign,
    color: "#FFD700",
    bg: "rgba(255,215,0,0.12)",
    border: "rgba(255,215,0,0.2)",
  },
  [NOTIFICATION_TYPES.MEMBER]: {
    icon: Users,
    color: "#9D7BFF",
    bg: "rgba(157,123,255,0.12)",
    border: "rgba(157,123,255,0.2)",
  },
  [NOTIFICATION_TYPES.EVENT]: {
    icon: Calendar,
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.2)",
  },
  [NOTIFICATION_TYPES.ALERT]: {
    icon: AlertCircle,
    color: "#f87171",
    bg: "rgba(248,113,113,0.12)",
    border: "rgba(248,113,113,0.2)",
  },
  [NOTIFICATION_TYPES.SUCCESS]: {
    icon: CheckCircle2,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.12)",
    border: "rgba(74,222,128,0.2)",
  },
  [NOTIFICATION_TYPES.SYSTEM]: {
    icon: Bell,
    color: "#c8c0e8",
    bg: "rgba(200,192,232,0.10)",
    border: "rgba(200,192,232,0.15)",
  },
};

// Mock notifications — substitua por chamada de API real
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
  const today = notifications.filter((n) =>
    ["Agora mesmo", "15 min atrás", "1h atrás", "3h atrás"].includes(n.time)
  );
  const yesterday = notifications.filter((n) => n.time === "Ontem");
  const groups = [];
  if (today.length) groups.push({ label: "Hoje", items: today });
  if (yesterday.length) groups.push({ label: "Ontem", items: yesterday });
  return groups;
}