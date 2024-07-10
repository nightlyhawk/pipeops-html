import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import DashnoardBase from "./pages/base";
import Overview from "./pages/overview";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import DoMe from "./pages/dome";
import { ThemeContextProvider } from "./context/themeContext";
import DoMeOverview from "./pages/dome/overview";
import StatusTable from "./components/task-status/status-data";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashnoardBase />} >
        <Route path="" element={<Overview />} />
        <Route path="do_me" element={<DoMe />}>
          <Route path="" element={<DoMeOverview />} />
          <Route path="total_tasks" element={<StatusTable />} />
          <Route path="ongoing_tasks" element={<StatusTable />} />
          <Route path="completed_tasks" element={<StatusTable />} />
          <Route path="pending_tasks" element={<StatusTable />} />
        </Route> 
      </Route>
    </Route>

  )  
)
function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <RouterProvider router={router}  exact/>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
