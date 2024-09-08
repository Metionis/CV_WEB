import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import HomePage from "./pages/HomePage/HomePage";
import MetionisPage from "./pages/MetionisPage/MetionisPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Feedback from "./pages/FeedbackPage/Feedback";

function App() {
  return (
    <BrowserRouter>
     {/* Wrap your app with BrowserRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/mycv" element={<MetionisPage />} /> 
        <Route path="/projects" element={<Portfolio />}/>
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;