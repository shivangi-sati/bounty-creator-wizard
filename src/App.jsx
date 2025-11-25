import { Routes, Route } from "react-router-dom";
import StepBasics from "./pages/StepBasics";
import RewardsStep from "./pages/RewardsStep";
import StepBacker from "./pages/StepBacker";
import Confirmation from "./pages/Confirmation";
import Result from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StepBasics />} />
      <Route path="/rewards" element={<RewardsStep />} />
      <Route path="/backer" element={<StepBacker />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/result" element={<Result />} /> 
    </Routes>
  );
}

export default App;

