import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastConfig = () => {
  return <ToastContainer position="top-right" autoClose={3000} hideProgressBar />;
};

export default ToastConfig;
