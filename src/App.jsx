import './App.css';
import Homepage from './pages/Index';
import { GlobalContext } from './context';

function App() {
  const user = {
    username : "Senna Bhany Majid"
  }

  return (
    <div className="card">
      <GlobalContext.Provider value={user}>
        <Homepage />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
