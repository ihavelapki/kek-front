import { AuthProvider } from '../shared/auth';
import { AppProvider } from "../shared/context/appContext";
import { AppRouter } from "./router";

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </AuthProvider>
  );
}


export default App;
