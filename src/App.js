
import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"
import './App.css';
import { RecipeProvider } from './RecipeContext';



export default function App() {

  return (
    <RecipeProvider>
      <>
        <Navbar />
        <div className="container">
          <AppRouter />
        </div>
      </>
    </RecipeProvider>
  );
};



