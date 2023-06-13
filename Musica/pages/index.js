import { useRouter } from "next/router";
import useHome from "./hooks/useHome";

const Musica = ({ titulo, artista, ano, id }) => {
  return (
    <tr>
      <th>{id}</th>
      <td>{titulo}</td>
      <td>{artista}</td>
      <td>{ano}</td>
    </tr>
  );
};

const Toast = () => {
  return (
    <div
      className="toast text-bg-primary  position-fixed top-0 end-0 p-3"
      role="alert"
      id="liveToast"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">musica adicionado com sucesso!</div>
      </div>
    </div>
  );
};

const HomePage = ({ novaMusica, setNovaMusica }) => {
  const { musicaLista } = useHome({ novaMusica, setNovaMusica });
  const router = useRouter();
  return (
    <main className="container">
      <Toast />
      <h1>Listagem de Músicas</h1>
      {musicaLista.length === 0 && <p>Não há musicas cadastrados</p>}

      {musicaLista.length > 0 && (
        <table className="table">
          <thead className="table-primary">
            <tr>
              <th scope="col">ID </th>
              <th scope="col">Título</th>
              <th scope="col">Artista</th>
              <th scope="col">Ano lançamento</th>
            </tr>
          </thead>
          <tbody>
            {musicaLista.map(({ titulo, artista, anoLancamento, id }) => {
              return (
                <Musica
                  key={id}
                  titulo={titulo}
                  artista={artista}
                  ano={anoLancamento}
                  id={id}
                />
              );
            })}
          </tbody>
        </table>
      )}
      <button
        className="btn btn-success"
        onClick={() => router.push("/novaMusica")}
      >
        + Incluir novo
      </button>
    </main>
  );
};
export default HomePage;
