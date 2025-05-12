import { useEffect, useState } from "react";

import { Meta } from "../components/dashboard-header/dashboard-goals/meta-form";
import { toast } from "react-toastify";

export const useDashboardMeta = () => {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [scrollToMetas, setScrollToMetas] = useState(false);

  const handleShowForm = () => {
    if (showInput === false) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  useEffect(() => {
    const metasSalvas = JSON.parse(localStorage.getItem("metas") || "[]");
    setMetas(metasSalvas);
  }, []);

  const atualizarValor = (id: string, novoValor: number) => {
    const novasMetas = metas.map((meta) =>
      meta.id === id ? { ...meta, valorAtual: novoValor } : meta
    );
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
  };

  const adicionarMeta = (novaMeta: Meta) => {
    const novasMetas = [...metas, novaMeta];
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
    setScrollToMetas(true);
  };

  const removeMeta = (id: string) => {
    const novasMetas = metas.filter((meta) => meta.id !== id);
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));

    toast.success(`Meta concluida!`);
  };

  return {
    metas,
    showInput,
    handleShowForm,
    atualizarValor,
    adicionarMeta,
    removeMeta,
    scrollToMetas,
    setScrollToMetas,
  };
};
