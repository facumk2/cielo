import { useState } from "react";
import "./index.css";
import Nube from "../../assets/img/nube.png";

const Word = () => {
  const [state, setState] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
  });

  const handleClick = (event) => {
    const id = parseInt(event.target.id);
    console.log(id);
    console.log(state);
    const siguienteBoton = `button${id + 1}`;
    const actualBoton = `button${id}`;
    setState((prev) => ({
      ...prev,
      [siguienteBoton]: true,
      [actualBoton]: false,
    }));
    console.log(siguienteBoton);
  };

  return (
    <div>
      <main>
        <div className="word">
          <div className="word__sky">cielo</div>
          <img src={Nube} alt="nube" className="Nube" />
          <div className="word__earth">tierra</div>
        </div>

        <div className="config-conteiner">
          <div className="action-conteiner">
            {state.button1 ? (
              <button id="1" onClick={handleClick}>
                Primer Boton
              </button>
            ) : null}
            {state.button2 ? (
              <button id="2" onClick={handleClick}>
                Segundo Boton
              </button>
            ) : null}
            {state.button3 ? (
              <button id="3" onClick={handleClick}>
                Tercero Boton
              </button>
            ) : null}
            {state.button4 ? (
              <button id="4" onClick={handleClick}>
                Cuarto Boton
              </button>
            ) : null}
            {state.button5 ? (
              <button id="5" onClick={handleClick}>
                Quinto Boton
              </button>
            ) : null}
            {state.button6 ? (
              <button id="6" onClick={handleClick}>
                Sexto Boton
              </button>
            ) : null}
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
