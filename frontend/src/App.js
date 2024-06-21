import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import { ThemeProvider } from 'styled-components'
import DashnoardBase from "./pages/base";
import Overview from "./pages/overview";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import DoMe from "./pages/dome";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashnoardBase />} >
        <Route path="" element={<Overview />} />
        <Route path="do_me" element={<DoMe />} />
      </Route>
    </Route>

  )  
)
function App() {
  const theme = {
    light: {
      primary: '#341949',
      secondary: 'white',
      pinkwhite: '#FAF2FF',
      green: '#158E01',
      gold: '#FF8D05'
    },
    dark: {
      primary: 'white',
      secondary: '#341949',
      pinkwhite: '#FAF2FF',
      green: '#158E01',
      gold: '#FF8D05'
    }
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
