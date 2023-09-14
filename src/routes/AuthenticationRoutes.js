import { lazy } from "react";
// project imports
import Loadable from "ui-component/Loadable";
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(
  lazy(() => import("views/pages/authentication/authentication3/Login3"))
);
const AuthForgotPassword3 = Loadable(
    lazy(() =>
      import("views/pages/authentication/authentication3/ForgotPassword3")
    )
  );
const VerifyOtp = Loadable(
    lazy(() =>
      import("views/pages/authentication/authentication3/VerifyOtp")
    )
  );

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <AuthLogin3 />,
    },
    {
        path: '/forgot-password',
        element: <AuthForgotPassword3 />
    },
    {
        path: '/verify-otp',
        element: <VerifyOtp />
    },
  ],
};

export default AuthenticationRoutes;
