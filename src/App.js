import { Route, Routes } from "react-router-dom";
import { TriviaApp } from "./components/TriviaApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TriviaApp />}></Route>
    </Routes>
  );
}

export default App;
