import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Layouts from './Pages/Layouts';
import Analytics from './Pages/Analytics';


const router = createBrowserRouter(
  [
    {path:"/dashboard2",
      element: <Dashboard />
    },
    {path:"/analytics",
      element: <Analytics/>
    },
    {path:"/layouts",
      element: <Layouts />
    },
  ]
);
 

function App() {
  return (
   <>
  <RouterProvider router={router} />

   </>
  );
}

export default App;
