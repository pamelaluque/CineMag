export const Edit = ({ movie, getMovies, setEdit, setListMovies }) => {
  const titleComponent = "Editar película";

  const saveChanges = (e, id) =>{
    e.preventDefault()
    
    //Consigo el target del evento
    let target= e.target;
    
    //Busco el índice del objeto de la película a actualizar
    const moviesSaved = getMovies()
    const index = moviesSaved.findIndex(movie => movie.id === id)
    console.log(index)

    //Creo objeto con el id de ese índice, título y descripción

    let actualMovie = {
        id,
        title: target.title.value,
        description: target.description.value
    }

    console.log(index, actualMovie);  

    //Actualizo el elemento con ese índice (lo piso)
    moviesSaved [index] = actualMovie
    console.log(moviesSaved)

    //Guardo el nuevo array de objetos en el LocalStorage
    localStorage.setItem("movies", JSON.stringify(moviesSaved));

    //Actualizo estados
    setListMovies(moviesSaved);
    setEdit(0); //reinicia el estado y cierra el formulario
    

  }


  return (
    <div className="editForm">
      <h3 className="title">{titleComponent}</h3>
      <form onSubmit={ e => saveChanges(e, movie.id)}>
        <input
          type="text"
          name="title"
          className="titleEdit"
          defaultValue={movie.title}
        />

        <textarea
          name="description"
          defaultValue={movie.description}
          className="descripcionEditada"
        />

        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
