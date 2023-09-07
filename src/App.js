import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayoutPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/DashboardPage";
import TestcasesPage from "./pages/TestcasesPage";
import TestrunsPage from "./pages/TestrunsPage";
import { useSelector } from "react-redux";
import TestDetails from "./components/Testcases/TestDetails/TestDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "folder",
        element: <TestcasesPage />,
        children:[
          {
            path:":testId", element:<TestDetails/>
          }
        ]
      },
      {
        path: "test-runs",
        element: <TestrunsPage />
      }
    ]
  }
]);

function App() {
  const isShow=useSelector(state=>state.uiKey.isModalShow);
    
  return <>
    {isShow && <TestDetails/>}
    <RouterProvider router={router} />
  </>;
}

export default App;
