import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign/SignIn";
import Shop from "./pages/shop/shop-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
