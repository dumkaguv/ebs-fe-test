import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/routes/app-router";
import { CartContextProvider } from "@/contexts/cart-context";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </Router>
  );
}

export default App;
