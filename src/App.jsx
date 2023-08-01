import { useState } from 'react'
import { ListMovies } from './components/listmovies/ListMovies'
import { Search } from './components/search/Search'
import { AddMovie } from './components/addMovie/AddMovie'
import { Navbar } from './components/layout/navBar/Navbar'
import { Footer } from './components/layout/footer/Footer'

function App() {

  const [listMovies, setListMovies] = useState([]);

  return (
    <>
      <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <img src="https://res.cloudinary.com/db8btnoov/image/upload/v1690552151/CineMag/movie-tickets_tfqpdm.png" alt="logo" />
            </div>
            <h1>CINEMAG</h1>
        </header>

        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal */}
        <section className="content">
            {/* Aquí van las películas */}
            <ListMovies listMovies={listMovies} setListMovies={setListMovies} />
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <Search />

            <AddMovie setListMovies={setListMovies} />
        </aside>

        {/* Pie de página */}
        <Footer />
    </div>
    </>
  )
}

export default App
