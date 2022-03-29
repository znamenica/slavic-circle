import React, { Suspense } from 'react';
import './App.css';
import Main from "./src/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <Suspense fallback="Загрузка...">
          <BrowserRouter>
              <Main />
          </BrowserRouter>
      </Suspense>
  );
}

export default App;
