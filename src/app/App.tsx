import { BrowserRouter } from 'react-router-dom';
import Navbar from "../widgets/header";
import '../shared/styles/app.css';
import KekRouter from '../shared/router';
import { AuthProvider } from '../shared/auth';
import { AppProvider } from "../shared/context/appContext";


function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <KekRouter />
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
}


export default App;
