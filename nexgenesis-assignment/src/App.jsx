import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import AppRoutes from "./router/AppRoutes";

const App = () => {
  return (
    <div className="flex h-screen w-screen justify-center bg-[#f2f2f2]">
      <div className="w-full md:w-3/5">
        <AppRoutes />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
