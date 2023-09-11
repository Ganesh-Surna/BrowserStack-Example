import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import TestCases from "./components/Dashboard/TestCases";
import TestRuns from "./components/Dashboard/TestRuns";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientObj } from "./util/http";
import TestCaseDetails from "./components/Dashboard/TestCaseDetails";


const router=createBrowserRouter([
  {
    path:"/", element:<RootLayout/>,
    children:[
      {
        index:true, element:<Home/>
      },
      {
        path:"/dashboard", element:<DashboardLayout/>,
        children:[
          {
            index:true, element:<Dashboard/>,
          },
          {
            path:"/dashboard/folder", element:<TestCases/>,
            children:[
              {
                path:"/dashboard/folder/:id", element:<TestCaseDetails/>
              },
            ]
          },
          {
            path:"/dashboard/test-runs", element:<TestRuns/>
          }
        ]
      }
    ]
  }
])

export default function App() {
  return (
    <QueryClientProvider client={queryClientObj}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}
