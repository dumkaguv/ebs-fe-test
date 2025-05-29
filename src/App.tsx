import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/routes/app-router";
import { MainLayout } from "@/components/shared";

function App() {
  return (
    <Router>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Router>
  );
}

export default App;
