import { useEffect, useState } from "react";
import { getAllMusicas } from "../../services/musica";

const useHome = ({ novaMusica, setNovaMusica }) => {
  const [musicaLista, setMusicaLista] = useState([]);
  useEffect(() => {
    if (novaMusica) {
      const toastLiveExample = document.getElementById("liveToast");
      const { Toast } = require("bootstrap");
      const toastBootstrap = new Toast(toastLiveExample);
      toastBootstrap.show();
      setNovaMusica(false);
    }
  }, [novaMusica]);

  useEffect(() => {
    getAllMusicas().then((res) => {
      setMusicaLista(res.data);
    });
  }, [novaMusica]);

  return {
    musicaLista,
  };
};

export default useHome;
