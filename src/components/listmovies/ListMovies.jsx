import { useEffect, useState } from "react";

export const ListMovies = ({listMovies, setListMovies}) => {
  //const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    console.log("componente ListMovies cargado");
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setListMovies(movies);
  };

  return (
    <>
      {listMovies != null ? (
        listMovies.map((movie) => {
          return (
            <article key={movie.id} className="peli-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas disponibles por el momento</h2>
      )}
    </>
  );
};
