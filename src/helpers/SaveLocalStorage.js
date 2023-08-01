export const SaveLocalStorage = (key, elemento) => {
  //Obtengo los elementos del LocalStorage
  let elementos = JSON.parse(localStorage.getItem(key));
  console.log(elementos);

  //Compruebo si es array
  if (Array.isArray(elementos)) {
    //Agrego adentro el nuevo objeto
    elementos.push(elemento);
  } else {
    //Creo un array con el nuevo elemento
    elementos = [elemento];
  }

  console.log(elementos);

  //Guardo en Local Storage
  localStorage.setItem(key, JSON.stringify(elementos));

  //Devuelvo el objeto guardado
  return elemento;
};
