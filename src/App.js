
import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"
import { UserProvider } from './UserContext';
import './App.css';
import { RecipeProvider } from './RecipeContext';



export default function App() {

  return (
    <RecipeProvider>
      <UserProvider>
        <>
          <Navbar />
          <div className="container">
            <AppRouter />
          </div>
        </>
      </UserProvider>
    </RecipeProvider>
  );
};



