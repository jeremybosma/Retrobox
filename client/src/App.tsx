import "./App.css";

import Sidebar from "./_components/navigation/sidebar/Sidebar";
import Navbar from "./_components/navigation/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="right_side">
        <Navbar />

        <main>
          <div className="card_wrap">
            <div className="card" />
            <div className="card" />
            <div className="card" />
            <div className="card" />
            <div className="card" />
            <div className="card" />
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;