import Header from "./Component/Header";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Header />}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
