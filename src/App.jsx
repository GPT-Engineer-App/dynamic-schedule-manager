import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ParticipantPage from "./pages/ParticipantPage.jsx";
import BudgetPlanPage from "./pages/BudgetPlanPage.jsx";
import ProviderPage from "./pages/ProviderPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/participants" element={<ParticipantPage />} />
        <Route path="/budget-plan" element={<BudgetPlanPage />} />
        <Route path="/providers" element={<ProviderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
