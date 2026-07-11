import "./App.css";
import Header from "./components/Header";
import CardHeader from "./components/CardHeader";
import Flashcard from "./components/Flashcard";
import FlipButton from "./components/FlipButton";
import Hint from "./components/Hint";

function App() {
  return (
    <>
      <div className="background"></div>

      <div className="container">
        <Header />

        <main>
          <CardHeader />
          <Flashcard />
          <FlipButton />
          <Hint />
        </main>
      </div>
    </>
  );
}

export default App;
