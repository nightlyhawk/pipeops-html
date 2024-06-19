import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './App.css';
import { ThemeProvider } from 'styled-components'
import Base from "./pages/base";
import Overview from "./pages/overview";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Base />} >
        <Route path="overview" element={<Overview />} />
      </Route>
    </Route>

  )  
)
function App() {
  const theme = {
    primary: '#341949',
    secondary: 'white',
    grain: '#FAF2FF',
    green: '#158E01',
    gold: '#FF8D05'
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router}  exact/>
      </div>
    </ThemeProvider>
  );
}

export default App;
