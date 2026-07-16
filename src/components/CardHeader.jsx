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

