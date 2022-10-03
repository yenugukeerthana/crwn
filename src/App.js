import Home from "./routes/home/home.component";
import { Route, Routes} from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.components";
const Shop=()=>{
  return(
    <div>
      hello from shop
    </div>    
  );
}
const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;