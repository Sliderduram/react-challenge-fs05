import "./App.css";

import { usePerson } from "./hooks/usePerson.hook";
import ImcView from "./views/ImcView";
import ImcForm from "./views/forms/ImcForm";
import ImcController from "./controllers/ImcController";
import Person from "./domain/Person";
import { Link } from "react-router-dom";

function App() {
  const [, setPerson] = usePerson();

  const calculateImc = async (height, weight) => {
    const p = new Person(Number(height), Number(weight));
    const ctrl = new ImcController();
    const result = await ctrl.calculate(p.toObject());

    setPerson(result);
  };

  return (
    <div className="container">
      <Link to="/authors">
        <h1>Ver autores</h1>
      </Link>

      <div className="data">
        <div className="form">
          <hr />
          <ImcForm onSubmit={calculateImc} />
        </div>
      </div>
      <hr />
      <div>
        <ImcView className="data" />
      </div>
    </div>
  );
}

export default App;
