import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">

        <div className="logo-icon">
        import { LuCopy } from "react-icons/lu";
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

          <span>0 / 8 cards</span>

        </div>

        <div className="progress-bar">

          <div className="progress-fill"></div>

        </div>

      </div>

      <div className="user">

        <div className="avatar">
          U
        </div>

        <p>0% complete</p>

      </div>

    </header>
  );
}

export default Header;