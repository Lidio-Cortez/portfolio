import { Code2, Server, Database, Cpu } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Lídio",
  role: "Engenheiro de Software",
};

export const TECHNOLOGIES = [
  {
    id: "react",
    name: "React + TypeScript",
    description: "Interfaces modernas",
    icon: Code2,
  },
  {
    id: "laravel",
    name: "Laravel",
    description: "APIs e back-end",
    icon: Server,
  },
  {
    id: "mysql",
    name: "MySQL",
    description: "Dados e performance",
    icon: Database,
  },
  {
    id: "java",
    name: "Java",
    description: "Sistemas robustos",
    icon: Cpu,
  },
];

export const STATS = [
  { value: "04+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "30+", label: "PROJETOS CONCLUÍDOS" },
  { value: "20+", label: "CLIENTES SATISFEITOS" },
  { value: "100%", label: "COMPROMISSO" },
];

export const PROJECTS = [
  {
    id: "01",
    category: "FINTECH / FULL-STACK",
    title: "Finora",
    description: "Plataforma financeira para equipas acompanharem receitas, despesas e previsões em tempo real.",
    link: "#",
  },
  {
    id: "02",
    category: "SAAS / DASHBOARD",
    title: "Clarity",
    description: "Workspace de gestão que centraliza projetos, métricas e comunicação numa experiência simples.",
    link: "#",
  },
  {
    id: "03",
    category: "B2B / E-COMMERCE",
    title: "Nexus",
    description: "Marketplace empresarial rápido e seguro, desenhado para simplificar compras complexas.",
    link: "#",
  },
];