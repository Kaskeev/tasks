import Email from "./components/Email/Email";
import Receipts from "./components/Receipts/Receipts";
import MainRoutes from "./MainRoutes/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Email />
    </div>
  );
}

export default App;
