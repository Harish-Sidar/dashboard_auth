import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/registerEmailVerify",
    element: <RegisterEmailVerify/>,
  },
  {
    path: "/RegisterSuccess",
    element: <RegisterSuccess/>,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword/>,
  },
  {
    path: "/ForgotPasswordSent",
    element: <ForgotPasswordSent/>,
  },
  {
    path: "/ResetPasswordSuccess",
    element: <ResetPasswordSuccess/>,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
