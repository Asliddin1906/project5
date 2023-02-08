import {Routes,Route } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

import "./assets/scss/main.scss"
import CardsProvider from "./contexts/cards";
import SingleCard from "./pages/single-card/single-card";


function App() {
  return (
    <CardsProvider>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card/:id" element={<SingleCard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </CardsProvider>
    );
}

export default App;
