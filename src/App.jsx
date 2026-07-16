import { useState } from "react";
import "./App.css";

import flashcards from "./data/flashcards.js";

import Header from "./components/Header.jsx";
import CardHeader from "./components/CardHeader";
import Flashcard from "./components/Flashcard";
import FlipButton from "./components/FlipButton";
import Hint from "./components/Hint";
import AnswerButtons from "./components/AnswerButtons";
import Stats from "./components/Stats";
import Navigation from "./components/Navigation";


function App() {
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  return (
    <>
      <div className="background"></div>

      <div className="container">
        <Header
          currentCard={currentCard}
          totalCards={flashcards.length}
        />

        <main>
          <CardHeader
            currentCard={currentCard}
            totalCards={flashcards.length}
            flashcard={flashcards[currentCard]}
          />
          <Flashcard 
          flipped={flipped}
          flashcard={flashcards[currentCard]}
          />

          <FlipButton
          flipped={flipped}
          setFlipped={setFlipped}
           />
          <Hint />
          <AnswerButtons />
          <Stats />
          <Navigation 
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            totalCards={flashcards.length}
            setFlipped={setFlipped}
            flashcards={flashcards}
          />
        </main>
      </div>
    </>
  );
}

export default App;
