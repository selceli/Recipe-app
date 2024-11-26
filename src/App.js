
import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"
import './App.css';
import { RecipeProvider } from './RecipeContext';
import { UserProvider } from './modules/users/UserContext';



export default function App() {

  return (
    <UserProvider>
      <RecipeProvider>
        <>
          <Navbar />
          <div className="container">
            <AppRouter />
          </div>
        </>
      </RecipeProvider>
    </UserProvider>
  );
};



