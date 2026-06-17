// src/pages/dashboard/Dashboard.jsx

import {
  Users,
  DollarSign,
  UserPlus,
  AlertCircle,
  TrendingUp,
  Download,
  UserRoundPlus,
  Wallet,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total arrecadado",
      value: "R$ 12.450",
      icon: DollarSign,
    },
    {
      title: "Membros",
      value: "347",
      icon: Users,
    },
    {
      title: "Novos membros",
      value: "+18",
      icon: UserPlus,
    },
    {
      title: "Pendências",
      value: "6",
      icon: AlertCircle,
    },
  ];

  const transactions = [
    {
      name: "João Silva",
      value: "R$ 100",
      status: "Pago",
    },
    {
      name: "Maria Souza",
      value: "R$ 50",
      status: "Pago",
    },
    {
      name: "Pedro Santos",
      value: "R$ 80",
      status: "Pendente",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <p className="text-sm text-zinc-500">Bem-vindo ao DIZIMUS</p>
          </div>

          <button
            className="
              rounded-xl
              bg-emerald-600
              px-5
              py-2
              text-white
              transition
              hover:bg-emerald-700
            "
          >
            Novo lançamento
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* CARDS */}
        <section
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-zinc-500">{item.title}</span>

                    <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
                  </div>

                  <div
                    className="
                      rounded-xl
                      bg-emerald-100
                      p-3
                    "
                  >
                    <Icon className="text-emerald-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* GRID */}
        <section
          className="
            mt-8
            grid
            gap-6
            lg:grid-cols-[2fr_1fr]
          "
        >
          {/* GRÁFICO */}
          <div
            className="
              rounded-2xl
              bg-white
              p-6
              shadow-sm
            "
          >
            <div className="mb-6 flex items-center gap-3">
              <TrendingUp />

              <h2 className="text-lg font-semibold">Receita mensal</h2>
            </div>

            <div
              className="
                flex
                h-80
                items-center
                justify-center
                rounded-xl
                border-2
                border-dashed
                border-zinc-200
              "
            >
              Inserir gráfico aqui
            </div>
          </div>

          {/* LATERAL */}
          <div className="space-y-6">
            <div
              className="
                rounded-2xl
                bg-white
                p-6
                shadow-sm
              "
            >
              <h2 className="mb-4 font-semibold">Ações rápidas</h2>

              <div className="space-y-3">
                <button className="dashboard-btn">
                  <Wallet />
                  Registrar dízimo
                </button>

                <button className="dashboard-btn">
                  <UserRoundPlus />
                  Novo membro
                </button>

                <button className="dashboard-btn">
                  <Download />
                  Exportar relatório
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TABELA */}
        <section
          className="
            mt-8
            rounded-2xl
            bg-white
            p-6
            shadow-sm
          "
        >
          <h2 className="mb-5 text-lg font-semibold">Últimos lançamentos</h2>

          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Nome</th>

                  <th className="py-3 text-left">Valor</th>

                  <th className="py-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((row) => (
                  <tr key={row.name} className="border-b">
                    <td className="py-4">{row.name}</td>

                    <td>{row.value}</td>

                    <td>
                      <span
                        className="
                          rounded-full
                          bg-emerald-100
                          px-3
                          py-1
                          text-sm
                          text-emerald-700
                        "
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
