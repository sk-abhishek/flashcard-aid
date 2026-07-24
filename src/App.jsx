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
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const [showHint, setShowHint] = useState(false);
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
          <Hint
            flashcard={flashcards[currentCard]}
            showHint={showHint}
            setShowHint={setShowHint}     
          />

          <AnswerButtons 
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            totalCards={flashcards.length}
            setFlipped={setFlipped}

            correctCount={correctCount}
            setCorrectCount={setCorrectCount}

            incorrectCount={incorrectCount}
            setIncorrectCount={setIncorrectCount}

            streak={streak}
            setStreak={setStreak}
          />

          <Stats
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            streak={streak}
          
          />
          <Navigation 
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            totalCards={flashcards.length}
            setFlipped={setFlipped}
            flashcards={flashcards}
            setShowHint={setShowHint}
          />
        </main>
      </div>
    </>
  );
}

export default App;
