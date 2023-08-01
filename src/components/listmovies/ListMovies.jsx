import { useEffect, useState } from "react";
import { Edit } from "../edit/Edit";

export const ListMovies = ({ listMovies, setListMovies }) => {
  //const [listMovies, setListMovies] = useState([]);

  const [edit, setEdit]= useState(0)

  useEffect(() => {
    console.log("componente ListMovies cargado");
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setListMovies(movies);
    return movies;
  };

  const deleteMovie = (id) => {
    //Consigo películas almacenadas
    let moviesSaved = getMovies();

    //Filtrar las películas para que elimine del array la que no quiero
    let newArrayMovies = moviesSaved.filter(
      movie => movie.id !== parseInt(id)
    );
    console.log(moviesSaved, newArrayMovies);

    //Actualizar estado con la lista de películas
    setListMovies(newArrayMovies);

    //Actualizar los datos en LocalStorage
    localStorage.setItem("movies", JSON.stringify(newArrayMovies))
  };
  return (
    <>
      {listMovies != null ? (
        listMovies.map((movie) => {
          return (
            <article key={movie.id} className="peli-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>

              <button className="edit" onClick={()=>{ setEdit(movie.id)}}>Editar</button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>
                Borrar
              </button>
              
                {/* Aparece el formulario */}
                {edit === movie.id && (
                  <Edit movie={movie}
                  getMovies={getMovies}
                  setEdit={setEdit}
                  setListMovies={setListMovies} />
                )}
            
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas disponibles por el momento</h2>
      )}
    </>
  );
};
