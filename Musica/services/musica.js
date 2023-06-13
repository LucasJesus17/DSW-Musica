import axios from "axios";

export const novaMusica = (payload) => {
  return axios.post("http://localhost:8080/musicas/cadastrar", payload);
};

export const getAllMusicas = () => {
  return axios.get("http://localhost:8080/musicas/all");
};
