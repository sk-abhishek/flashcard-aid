import { useState, useEffect } from "react";
import "./App.css";



import Header from "./components/Header.jsx";
import CardHeader from "./components/CardHeader";
import Flashcard from "./components/Flashcard";
import FlipButton from "./components/FlipButton";
import Hint from "./components/Hint";
import AnswerButtons from "./components/AnswerButtons";
import Stats from "./components/Stats";
import Navigation from "./components/Navigation";
import CompleteScreen from "./components/CompleteScreen.jsx";
import AddFlashcard from "./components/AddFlashcard.jsx";
import DeleteButton from "./components/DeleteButton.jsx";
import EditButton from "./components/EditButton.jsx";
import { TbFlagSearch } from "react-icons/tb";


function App() {
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const [flashcards, setFlashcards] = useState([]);

  const [showHint, setShowHint] = useState(false);
  const [deckComplete, setDeckComplete] = useState(false);

  const [editing, setEditing] = useState(false);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");


  useEffect(() => {
    fetch("http://localhost:3001/flashcards")
      .then((response) => response.json())
      .then((data) => {
        setFlashcards(data);
      })
      .catch((error) => {
        console.error("Error fetching flashcards:", error);
      });
  }, []);

  if (flashcards.length === 0) {
    return (
      <>
       <AddFlashcard setFlashcards={setFlashcards}/>
      </>
    );
  }

  if (deckComplete) {
    return (
      <>
        <div className="background"></div>

        <div className="container">
          <CompleteScreen
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            streak={streak}
            onRestart={() => {
              setDeckComplete(false);
              setCurrentCard(0);
              setCorrectCount(0);
              setIncorrectCount(0);
              setStreak(0);
              setFlipped(false);
              setShowHint(false);
            }}
            />
        </div>
      </>
    );
  }
  
  return (
    <>
      <div className="background"></div>

      <div className="container">
        <Header
          currentCard={currentCard}
          totalCards={flashcards.length}
        />

        <main>
          <AddFlashcard 
            setFlashcards={setFlashcards}
          />


          <CardHeader
            currentCard={currentCard}
            totalCards={flashcards.length}
            flashcard={flashcards[currentCard]}
          />
          <Flashcard 
          flipped={flipped}
          flashcard={flashcards[currentCard]}
          />

          <DeleteButton
            flashcard={flashcards[currentCard]}
            setFlashcards={setFlashcards}
            setCurrentCard={setCurrentCard}
          />

          <EditButton
            onEdit={() => {
              setEditing(true);
              setEditQuestion(flashcards[currentCard].question);
              setEditAnswer(flashcards[currentCard].answer);
          }}
          
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

          {editing && (
            <div className="edit-form">
              <input
                type="text"
                value={editQuestion}
                onChange={(e) => setEditQuestion(e.target.value)}
                placeholder="Question"
                />

                <input
                  type="text"
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                  placeholder="Answer"
                />

                <button>
                  Save Changes
                </button>
            </div>
          )}
          

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

            setDeckComplete={setDeckComplete}
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
