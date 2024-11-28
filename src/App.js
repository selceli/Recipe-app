
import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"
import './App.css';
import { RecipesProvider } from './modules/recipes/RecipesProvider';
import { UserProvider } from './modules/users/UserContext';



export default function App() {

  return (
    <UserProvider>
      <RecipesProvider>
        <>
          <Navbar />
          <div className="container">
            <AppRouter />
          </div>
        </>
      </RecipesProvider>
    </UserProvider>
  );
};



