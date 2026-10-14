import { useState } from "react";
import "./styles.css";

export default function App() {
  const [adresse, setAdresse] = useState({
    name: "",
    strasse: "",
    hausnummer: 0
  });
  console.log(adresse);
  return (
    <div id="app">
      <header>Übung WID 4 - Object State </header>
      <h4>Lieferung an</h4>
      <div id="adressEingabe">
        <div className="container">
          <span>Nachname</span>
          <input
            className="input"
            placeholder="Nachname"
            type="text"
            value={adresse.name}
            onChange={(e) => setAdresse({ ...adresse, name: e.target.value })}
          />
        </div>
        <div className="container">
          <span>Strasse</span>
          <input
            className="input"
            placeholder="Strassenname"
            type="text"
            value={adresse.strasse}
            onChange={(e) => setAdresse({ ...adresse, strasse: e.target.value })}
          />
        </div>
        <div className="container">
          <span>Hausnummer</span>
          <input
            className="input"
            type="number"
            value={adresse.hausnummer}
            onChange={(e) => setAdresse({ ...adresse, hausnummer: parseInt(e.target.value) })} // String aus Event wird zu Zahl
          />
        </div>
        <button
          className="Button"
          onClick={() => {
            // Zeigt die Eingaben aus den Feldern als Popup:
            alert(`Gesendet an ${adresse.name}, in ${adresse.strasse} ${adresse.hausnummer}`);
          }}
        >
          Absenden
        </button>
        <button
          className="Button"
          onClick={() => {
            setAdresse({ name: "", strasse: "", hausnummer: 0 })}}
        >
          Zurücksetzen
        </button>
      </div>
    </div>
  );
}
