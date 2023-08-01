import { useState } from "react";

export const Search = ({ listMovies, setListMovies }) => {
  const [search, setSearch] = useState("");
  const [noFinded, setNoFinded] = useState(false);

  const searchMovie = (e) =>{
    //Crear un estado y actualizarlo
    setSearch(e.target.value)
    console.log(search)

    //El listado completo de películas
    //Lo consigo pasando por props de APP a Search de ListMovies y setListMovies

    //Filtro para buscar coincidencias
    let moviesFinded = listMovies.filter(movie =>{
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    //Compruebo si hay resultado
    if (search.length <= 1 || moviesFinded <= 0){
      moviesFinded = JSON.parse(localStorage.getItem("movies"))
      setNoFinded(true);
    }else{
      setNoFinded(false);
    }


    //console.log(moviesFinded)
    
    //Doy valor de todo en LocalStorage

    //Actualizo estado del listado principal con lo que filtré
    setListMovies(moviesFinded)
  }
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {(noFinded == true && search.length > 2) && (
        <span className="noFinded">No se encontró ningún resultado</span>
      )}
      <form>
        <input  type="text"
                id="searchField"
                name="search"
                autoComplete="off"
                value={search}
                onChange={searchMovie} />
                
        <button>Buscar</button>
      </form>
    </div>
  );
};
