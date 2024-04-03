import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/task",
      element: <div>About</div>,
    },
  ]);

  return (
    <div className="w-[100%] p-[16px] max-w-[390px] min-h-[100vh] bg-slate-400 overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
