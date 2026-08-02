/**
 * Displays information about the current flashcard.
 *
 * Shows the current card number, total number of cards,
 * and the category of the active flashcard.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.currentCard - Index of the current flashcard.
 * @param {number} props.totalCards - Total number of flashcards.
 * @param {Object} props.flashcard - The currently displayed flashcard.
 * @returns {JSX.Element} A header displaying flashcard information.
 */

function CardHeader({ currentCard, totalCards, flashcard}) {
    return (
      <div className="card-header">
        <h3>Card {currentCard + 1} of {totalCards}</h3>
  
        <span className="category-pill">
          {flashcard.category}
        </span>
      </div>
    );
  }
  
  export default CardHeader;

