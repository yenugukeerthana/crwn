import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
const App=()=>{
  return(
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
};

export default App;