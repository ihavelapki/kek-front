import { AuthProvider } from '../shared/auth';
import { AppProvider } from "../shared/context/appContext";
import { AppRouter } from "./router";

import '../shared/styles/app.css';





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
