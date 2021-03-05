import "./index.css";

const Word = () => {
  return (
    <div>
      <main>
        <div className="word">
          <div className="word__sky">cielo</div>
          <div className="word__earth">tierra</div>
        </div>

        <div className="config-conteiner">
          <div className="action-conteiner">
            <button>Primer Boton</button>
            <button>Segundo Boton</button>
            <button>Tercero Boton</button>
            <button>Cuarto Boton</button>
            <button>Quinto Boton</button>
            <button>Sexto Boton</button>
          </div>
          <div className="bottom-menu">
            <nav className="bottom-menu__plants">
              <button>pantas</button>
              <ul>
                <li>roble</li>
                <li>canabis</li>
                <li>helecho</li>
                <li>tulipan</li>
              </ul>
            </nav>
            <nav className="bottom-menu__animals">
              <button>animales</button>
              <ul>
                <li>leon</li>
                <li>pajaro</li>
                <li>perro</li>
                <li>cocodrilo</li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Word;
