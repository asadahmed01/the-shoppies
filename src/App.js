import "./App.css";
import SearchBar from "./components/searchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ToastContainer />
    </div>
  );
}

export default App;
