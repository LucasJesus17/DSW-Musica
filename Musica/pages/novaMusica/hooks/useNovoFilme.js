import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { novaMusica } from "../../../services/musica";

const useNovoFilme = ({ setNovaMusica }) => {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");

  const [tituloErro, setTituloErro] = useState();
  const [generoErro, setGeneroErro] = useState();
  const [anoLancamentoErro, setAnoLancamentoErro] = useState();

  const router = useRouter();

  const handleSubmit = () => {
    setTituloErro(null);

    setGeneroErro(null);

    setAnoLancamentoErro(null);

    const payload = { titulo, genero, anoLancamento };
    novaMusica(payload)
      .then(() => {
        setNovaMusica(true);
        router.push("/");
      })
      .catch((err) => {
        router.push("/");
      });
  };

  const handleCancel = () => {
    router.push("/");
  };

  useEffect(() => {
    setTituloErro(false);
  }, [titulo]);

  useEffect(() => {
    setGeneroErro(false);
  }, [genero]);

  useEffect(() => {
    setAnoLancamentoErro(false);
  }, [anoLancamento]);

  return {
    titulo,
    genero,
    anoLancamento,
    setTitulo,
    setGenero,
    setAnoLancamento,
    handleCancel,
    handleSubmit,
    tituloErro,
    generoErro,
    anoLancamentoErro,
  };
};

export default useNovoFilme;
