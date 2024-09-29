import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import WorkDetailPage from "./pages/WorkDetailPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/WorksPage/:outcome" element={<WorksPage />} />
      <Route path="/WorksPage/:outcome/WorkDetailPage/:url" element={<WorkDetailPage />} />
    </Routes>
  )
};

export default App;
