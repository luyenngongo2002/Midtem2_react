import "./App.css";
import ListDishes from "./component/listDishes";
import Statistics from "./component/statistics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<ListDishes />} />
            <Route path="/quantity" element={<Statistics/>} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* <Statistics/> */}
    </div>
  );
}

export default App;
