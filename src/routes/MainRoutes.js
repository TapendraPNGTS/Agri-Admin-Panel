import { lazy } from "react";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import PurchaseHistory from "views/utilities/PurchaseHistory/PurchaseHistory";
import ViewPurchaseHistory from "views/utilities/PurchaseHistory/ViewPurchaseHistory";

// dashboard routing
const Dashboard = Loadable(lazy(() => import("views/dashboard/Default")));

// utilities routing
const Users = Loadable(lazy(() => import("views/utilities/users/users")));
const ViewUsers = Loadable(
  lazy(() => import("views/utilities/users/view-user"))
);

// banner routing
const Banner = Loadable(lazy(() => import("views/utilities/Banner/banner")));
const AddBanner = Loadable(
  lazy(() => import("views/utilities/Banner/add-banner"))
);
const EditBanner = Loadable(
  lazy(() => import("views/utilities/Banner/edit-banner"))
);

// category routing
const Category = Loadable(
  lazy(() => import("views/utilities/category/category"))
);
const AddCategory = Loadable(
  lazy(() => import("views/utilities/category/add-category"))
);
const EditCategory = Loadable(
  lazy(() => import("views/utilities/category/edit-category"))
);
const ViewCategory = Loadable(
  lazy(() => import("views/utilities/category/view-category"))
);

// product Routes
const Product = Loadable(lazy(() => import("views/utilities/product/Product")));
const ViewProduct = Loadable(
  lazy(() => import("views/utilities/product/view-product"))
);
const AddProduct = Loadable(
  lazy(() => import("views/utilities/product/add-product"))
);
const EditProduct = Loadable(
  lazy(() => import("views/utilities/product/edit-product"))
);

// inventory Routes
const Inventory = Loadable(
  lazy(() => import("views/utilities/inventory/inventory"))
);

// HRM Router
const Attenance = Loadable(
  lazy(() => import("views/utilities/HRM/attendance/attendence"))
);
const Holiday = Loadable(
  lazy(() => import("views/utilities/HRM/holiday/holiday"))
);
const AddHoliday = Loadable(
  lazy(() => import("views/utilities/HRM/holiday/add-holiday"))
);
const EditHoliday = Loadable(
  lazy(() => import("views/utilities/HRM/holiday/edit-holiday"))
);

// staff routes
const StaffManagement = Loadable(
  lazy(() => import("views/utilities/Staff Management/StaffManagement"))
);
const Rolls = Loadable(
  lazy(() => import("views/utilities/Staff Management/Rolls"))
);
const Permission = Loadable(
  lazy(() => import("views/utilities/Staff Management/Permission"))
);
const CreateUser = Loadable(
  lazy(() => import("views/utilities/Staff Management/CreateUser"))
);
const AddRoles = Loadable(
  lazy(() => import("views/utilities/Staff Management/AddRoles"))
);
const EditUser = Loadable(
  lazy(() => import("views/utilities/Staff Management/edit-user"))
);
const ViewRole = Loadable(
  lazy(() => import("views/utilities/Staff Management/view-role"))
);
const ViewStaff = Loadable(
  lazy(() => import("views/utilities/Staff Management/view-staff"))
);

// franchises routes
const FranchiseRequest = Loadable(
  lazy(() => import("views/utilities/Franchise/franchise-request"))
);
const ViewFranchiseRequest = Loadable(
  lazy(() => import("views/utilities/Franchise/view-franchise-ruq"))
);

// password routes
const ChangePassword = Loadable(
  lazy(() => import("views/utilities/change-password/change-password"))
);

// sample page routing
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/inventory",
      element: <Inventory />,
    },
    {
      children: [
        {
          path: "banner",
          element: <Banner />,
        },
        {
          path: "add-banner",
          element: <AddBanner />,
        },
        {
          path: "edit-banner/:id",
          element: <EditBanner />,
        },
      ],
    },
    {
      children: [
        {
          path: "staff-users",
          element: <StaffManagement />,
        },
        {
          path: "role",
          element: <Rolls />,
        },
        {
          path: "permission",
          element: <Permission />,
        },
        {
          path: "create-user",
          element: <CreateUser />,
        },
        {
          path: "edit-user/:id",
          element: <EditUser />,
        },
        {
          path: "add-roles",
          element: <AddRoles />,
        },
        {
          path: "view-roles/:id",
          element: <ViewRole />,
        },
        {
          path: "view-staff/:id",
          element: <ViewStaff />,
        },
      ],
    },
    {
      children: [
        {
          path: "purchase-history",
          element: <PurchaseHistory />,
        },
        {
          path: "view-purchase-history/:id",
          element: <ViewPurchaseHistory />,
        },
      ],
    },
    {
      children: [
        {
          path: "franchise-request",
          element: <FranchiseRequest />,
        },
        {
          path: "view-franchise-request/:id",
          element: <ViewFranchiseRequest />,
        },
      ],
    },
    {
      children: [
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "view-user/:id",
          element: <ViewUsers />,
        },
      ],
    },
    {
      children: [
        {
          path: "change-passwrd",
          element: <ChangePassword />,
        },
      ],
    },
    {
      children: [
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "add-category",
          element: <AddCategory />,
        },
        {
          path: "edit-category/:id",
          element: <EditCategory />,
        },
        {
          path: "view-category/:id",
          element: <ViewCategory />,
        },
      ],
    },
    {
      children: [
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "edit-product/:id",
          element: <EditProduct />,
        },
        {
          path: "view-product/:id",
          element: <ViewProduct />,
        },
      ],
    },
    {
      children: [
        {
          path: "attedance",
          element: <Attenance />,
        },
      ],
    },
    {
      children: [
        {
          path: "holidays",
          element: <Holiday />,
        },
        {
          path: "add-holiday",
          element: <AddHoliday />,
        },
        {
          path: "edit-holiday/:id",
          element: <EditHoliday />,
        },
      ],
    },
  ],
};

export default MainRoutes;
