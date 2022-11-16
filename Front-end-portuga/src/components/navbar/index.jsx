import { NavBackground } from "./styled";
import { Link } from 'react-router-dom'

function NavMenu({ photo, img }) {
  return (
    <NavBackground>
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <a className="navbar-brand" href="./index.html">
          <img src={img} width="30px" />
          Portuga
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu"
          aria-expanded="false" aria-label="navegação">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/desafio' className="nav-link">
              <img src={photo} width="20px" />
              Desafios Portuga
            </Link></li>
            <li className="nav-item"><Link to='/ebook' className="nav-link">Ebooks</Link></li>
            <li className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
          </ul>

        </div>

        <form className="d-flex aling-content-rigth">
          <ul className="navbar-nav">
            <li className="nav-item slogan">"Transformando através da Educação"</li>
          </ul>
        </form>
      </nav>
    </NavBackground >
  )
}

export default NavMenu;