import './App.css';
import Sidebar from './Componets/Sidebar';
import Feed from './Componets/Feed';
import Widgets from './Componets/Widgets';




function App() {
  return (
    <div className="app">
      {/* Side bar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>

  );
}

export default App;
