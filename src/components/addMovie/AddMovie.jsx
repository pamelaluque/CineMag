import { useState } from "react";
import { SaveLocalStorage } from "../../helpers/SaveLocalStorage";

export const AddMovie = ({ setListMovies }) => {
  const titleComponent = "Agregar película";
  const [movieInitial, setMovieInitial] = useState({
    title: "",
    description: "",
  });

  //   Desestructuro el objeto de movieInitial
  const { title, description } = movieInitial;

  const getFormValues = (e) => {
    e.preventDefault();

    //Obtengo datos del formulario
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //alert(title + "-" + description);

    // Creo objeto con datos de la película a guardar

    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };

    // Guardo el nuevo estado
    setMovieInitial(movie);

    //Actualizo el listado principal de películas
    setListMovies((elementos) => {
      return [...elementos, movie];
    });

    // Guardo en LocalStorage
    SaveLocalStorage("movies", movie);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>

      <strong>{title && description && "Creaste la película: " + title}</strong>
      <form onSubmit={getFormValues}>
        <input type="text" id="title" name="title" placeholder="Título" />

        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>

        <input type="submit" value="Guardar" id="save" />
      </form>
    </div>
  );
};
