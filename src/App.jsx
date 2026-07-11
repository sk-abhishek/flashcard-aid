import "./App.css";
import Header from "./components/Header";
import CardHeader from "./components/CardHeader";

function App() {
  return (
    <>
      <div className="background"></div>

      <div className="container">
        <Header />

        <main>
          <CardHeader />
        </main>
      </div>
    </>
  );
}

export default App;
