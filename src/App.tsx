import "./styles/App.css";
import "./styles/style.css";

import { UserProvider } from "./features/auth/UserContext";
import GlobalNavigation from "./components/GlobalNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalNavigation />
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
