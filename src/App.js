import React from "react";
import Contenu from './Components/Contenu/Contenu'
import ToogleLangs from './Components/ToggleLangs/ToggleLangs'
import ContextProvider from './context/langContext'

function App() {
  return (
    <ContextProvider>
      <ToogleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default App;
