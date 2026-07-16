import { LuCopy } from "react-icons/lu";

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