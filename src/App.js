
import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"
import { UserProvider } from './UserContext';


import './App.css';

export default function App() {

  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="container">
          <AppRouter />
        </div>
      </UserProvider>
    </>
  );
};



