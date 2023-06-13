import { useState } from "react";

const useHooks = () => {
  const [novaMusica, setNovaMusica] = useState(false);
  return {
    setNovaMusica,
    novaMusica,
  };
};

export default useHooks;
