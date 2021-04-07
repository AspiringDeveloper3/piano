import "./App.css";
import * as Tone from "tone";
import { addClass, removeClass } from "tonic-js";

const synth = new Tone.Synth().toDestination();

function App() {
  window.addEventListener("keypress", (event) => {
    switch (event.key) {
      case "a":
        synth.triggerAttackRelease("A4", "8n");
        addClass(".A", "faded");

        setTimeout(() => removeClass(".A", "faded"), 200);
        break;
      case "b":
        synth.triggerAttackRelease("B4", "8n");
        addClass(".B", "faded");

        setTimeout(() => removeClass(".B", "faded"), 200);
        break;
      case "c":
        synth.triggerAttackRelease("C4", "8n");
        addClass(".C", "faded");

        setTimeout(() => removeClass(".C", "faded"), 200);
        break;
      case "d":
        synth.triggerAttackRelease("D4", "8n");
        addClass(".D", "faded");

        setTimeout(() => removeClass(".D", "faded"), 200);
        break;
      case "e":
        synth.triggerAttackRelease("E4", "8n");
        addClass(".E", "faded");

        setTimeout(() => removeClass(".E", "faded"), 200);
        break;
      case "f":
        synth.triggerAttackRelease("F4", "8n");
        addClass(".F", "faded");

        setTimeout(() => removeClass(".F", "faded"), 200);
        break;
      case "g":
        synth.triggerAttackRelease("G4", "8n");
        addClass(".G", "faded");

        setTimeout(() => removeClass(".G", "faded"), 200);
        break;

      case "C":
        synth.triggerAttackRelease("C5", "8n");
        addClass(".C2", "faded");

        setTimeout(() => removeClass(".C2", "faded"), 200);
        break;

      default:
        console.log(event.key);
        break;
    }
  });
  return (
    <div className="App">
      <button
        className="key C"
        onClick={() => {
          synth.triggerAttackRelease("C4", "8n");
          addClass(".C", "faded");

          setTimeout(() => removeClass(".C", "faded"), 200);
        }}
      >
        C
      </button>
      <button
        className="key D"
        onClick={() => {
          synth.triggerAttackRelease("D4", "8n");

          addClass(".D", "faded");

          setTimeout(() => removeClass(".D", "faded"), 200);
        }}
      >
        D
      </button>
      <button
        className="key E"
        onClick={() => {
          synth.triggerAttackRelease("E4", "8n");

          addClass(".E", "faded");

          setTimeout(() => removeClass(".E", "faded"), 200);
        }}
      >
        E
      </button>
      <button
        className="key F"
        onClick={() => {
          synth.triggerAttackRelease("F4", "8n");

          addClass(".F", "faded");

          setTimeout(() => removeClass(".F", "faded"), 200);
        }}
      >
        F
      </button>
      <button
        className="key G"
        onClick={() => {
          synth.triggerAttackRelease("G4", "8n");

          addClass(".G", "faded");

          setTimeout(() => removeClass(".G", "faded"), 200);
        }}
      >
        G
      </button>
      <button
        className="key A"
        onClick={() => {
          synth.triggerAttackRelease("A4", "8n");

          addClass(".A", "faded");

          setTimeout(() => removeClass(".A", "faded"), 200);
        }}
      >
        A
      </button>
      <button
        className="key B"
        onClick={() => {
          synth.triggerAttackRelease("B4", "8n");

          addClass(".B", "faded");

          setTimeout(() => removeClass(".B", "faded"), 200);
        }}
      >
        B
      </button>
      <button
        className="key C2"
        onClick={() => {
          synth.triggerAttackRelease("C5", "8n");

          addClass(".C2", "faded");

          setTimeout(() => removeClass(".C2", "faded"), 200);
        }}
      >
        C
      </button>

      <div className="info">
        <strong className="up-arrow">^</strong>
        <h2>Shift + C</h2>
      </div>
    </div>
  );
}

export default App;
