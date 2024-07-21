import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import "../src/styles/style.css";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { DetailsPages } from "./components/common/DetailsPages";
import { Admission } from "./pages/Admission";
import { Transcript } from "./pages/Transcript";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Index />}></Route>
        <Route path="/admission" element={<Admission />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/details-page" element={<DetailsPages />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
