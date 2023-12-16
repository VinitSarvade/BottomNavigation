import BottomBar from "./BottomBar/bottom-bar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BottomBar variant="underline" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BottomBar variant="floating" />
    </div>
  );
}
