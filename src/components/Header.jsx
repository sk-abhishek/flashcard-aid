import { LuCopy } from "react-icons/lu";

/**
 * Displays the application header and study progress.
 *
 * Shows the Flashcard Aid branding, the user's progress
 * through the deck, and a visual progress bar.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.currentCard - Index of the current flashcard.
 * @param {number} props.totalCards - Total number of flashcards.
 * @returns {JSX.Element} The application header.
 */
function Header({ currentCard, totalCards}) {
  const progress = Math.round(((currentCard + 1) / totalCards) * 100);

  return (
    <header className="header">

      <div className="logo">

        <div className="logo-icon">
        <LuCopy />
        </div>

        <div>
          <h2>Flashcard</h2>
          <p>Learning Aid</p>
        </div>

      </div>

      <div className="progress-wrapper">

        <div className="progress-top">

          <span>Progress</span>

          <span>
            {currentCard + 1} / {totalCards} cards
          </span>

        </div>

        <div className="progress-bar">

          <div 
          
          className="progress-fill"
          style={{ width: `${progress}%` }}    
          ></div>

        </div>

      </div>

      <div className="user">

        <div className="avatar">
          U
        </div>

        <p>{progress}% complete</p>

      </div>

    </header>
  );
}

export default Header;