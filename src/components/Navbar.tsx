function Navbar() {

  return (
    <div className="Navbar-container">
      <div className="Img-container">
        <img src="../src/assets/logo-navbar.png" alt="JLPZingueria-Logo" />
      </div>
      <div className="Anchor-container">
        <ul>
          <li>
            <button>
              <a href="">Empresa</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Trabajos</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Contacto</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Novedades</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;