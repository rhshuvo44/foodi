import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import router from "./router/Routers";

function App() {
  return (
      <RouterProvider router={router} />
    
  );
}

export default App;
