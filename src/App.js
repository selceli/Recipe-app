
import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"

import './App.css';

export default function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
};



