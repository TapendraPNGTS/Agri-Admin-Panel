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
const ViewAttedance = Loadable(
  lazy(() => import("views/utilities/HRM/attendance/view-attendence"))
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
const Permission = Loadable(
  lazy(() => import("views/utilities/Staff Management/permission/Permission"))
);
const CreateUser = Loadable(
  lazy(() => import("views/utilities/Staff Management/CreateUser"))
);

const Rolls = Loadable(
  lazy(() => import("views/utilities/Staff Management/role/Rolls"))
);
const AddRoles = Loadable(
  lazy(() => import("views/utilities/Staff Management/role/AddRoles"))
);
const ViewRole = Loadable(
  lazy(() => import("views/utilities/Staff Management/role/view-role"))
);
const EditRole = Loadable(
  lazy(() => import("views/utilities/Staff Management/role/EditRoles"))
);

const ViewStaff = Loadable(
  lazy(() => import("views/utilities/Staff Management/view-staff"))
);
const EditUser = Loadable(
  lazy(() => import("views/utilities/Staff Management/edit-user"))
);

// franchises routes
const FranchiseRequest = Loadable(
  lazy(() => import("views/utilities/Franchise/franchise-request"))
);
const FranchiseForm = Loadable(
  lazy(() => import("views/utilities/Franchise/franchise-form"))
);
const Franchise = Loadable(
  lazy(() => import("views/utilities/Franchise/franchise"))
);
const ViewFranchiseRequest = Loadable(
  lazy(() => import("views/utilities/Franchise/view-franchise-ruq"))
);
const EditFranchiseRequest = Loadable(
  lazy(() => import("views/utilities/Franchise/edit-franchise"))
);

// password routes
const ChangePassword = Loadable(
  lazy(() => import("views/utilities/change-password/change-password"))
);

// Manage area routes
const State = Loadable(
  lazy(() => import("views/utilities/manage-area/state/state"))
);

// Manage area routes
const EditState = Loadable(
  lazy(() => import("views/utilities/manage-area/state/edit-state"))
);
const AddState = Loadable(
  lazy(() => import("views/utilities/manage-area/state/add-state"))
);

// Manage area routes
const District = Loadable(
  lazy(() => import("views/utilities/manage-area/district/district"))
);
const EditDistrict = Loadable(
  lazy(() => import("views/utilities/manage-area/district/edit-district"))
);
const AddDistrict = Loadable(
  lazy(() => import("views/utilities/manage-area/district/add-district"))
);

// Manage area routes
const PinCode = Loadable(
  lazy(() => import("views/utilities/manage-area/state/pin-code"))
);
const EditPinCode = Loadable(
  lazy(() => import("views/utilities/manage-area/pin-code/edit-pin-code"))
);
const AddPinCode = Loadable(
  lazy(() => import("views/utilities/manage-area/pin-code/add-pin-code"))
);

// commission routes
const Commissiom = Loadable(
  lazy(() => import("views/utilities/commission/commission"))
);
const AddCommissiom = Loadable(
  lazy(() => import("views/utilities/commission/add-commission"))
);
const EditCommissiom = Loadable(
  lazy(() => import("views/utilities/commission/edit-commission"))
);

// application e-commerce pages
const AppECommProducts = Loadable(
  lazy(() => import("views/utilities/e-commerce/Products"))
);
const AppECommProductDetails = Loadable(
  lazy(() => import("views/utilities/e-commerce/ProductDetails"))
);
const AppECommProductList = Loadable(
  lazy(() => import("views/utilities/e-commerce/ProductList"))
);
const AppECommCheckout = Loadable(
  lazy(() => import("views/utilities/e-commerce/Checkout"))
);

// subcategory routes
const SubCategory = Loadable(
  lazy(() => import("views/utilities/sub-category/subcategory"))
);
const AddSubCategory = Loadable(
  lazy(() => import("views/utilities/sub-category/add-subcategory"))
);
const EditSubCategory = Loadable(
  lazy(() => import("views/utilities/sub-category/edit-subcategory"))
);
const ViewSubCategory = Loadable(
  lazy(() => import("views/utilities/sub-category/view-subcategory"))
);

//incharge routes

const FranchiseState = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseState/franchiseState"))
);
const AddFranchiseState = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseState/add-franchiseState")
  )
);
const EditFranchiseState = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseState/edit-franchiseState")
  )
);
const FranchiseDistrict = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseDistrict/franchiseDistrict")
  )
);
const AddFranchiseDistrict = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseDistrict/add-franchiseDistrict")
  )
);
const EditFranchiseDistrict = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseDistrict/edit-franchiseDistrict")
  )
);

// block routes
const FranchiseBlock = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseBlock/franchiseBlock"))
);
const AddFranchiseBlock = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseBlock/add-franchiseBlock"))
);
const EditFranchiseBlock = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseBlock/edit-franchiseBlock")
  )
);
// cluster routes
const FranchiseCluster = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseCluster/franchiseCluster"))
);
const AddFranchiseCluster = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseCluster/add-franchiseCluster"))
);
const EditFranchiseCluster = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseCluster/edit-franchiseCluster")
  )
);

// cluster routes
const FranchiseVillage = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseVillage/franchiseVillage"))
);
const AddFranchiseVillage = Loadable(
  lazy(() => import("views/utilities/incharge/franchiseVillage/add-franchiseVillage"))
);
const EditFranchiseVillage = Loadable(
  lazy(() =>
    import("views/utilities/incharge/franchiseVillage/edit-franchiseVillage")
  )
);

//ledger

const Ledger = Loadable(
  lazy(() => import("views/utilities/Transaction History/transaction"))
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
      path: "/transaction-history",
      element: <Ledger />,
    },

    {
      path: "/e-commerce/products",
      element: <AppECommProducts />,
    },
    {
      path: "/e-commerce/product-details/:id",
      element: <AppECommProductDetails />,
    },
    {
      path: "/e-commerce/product-list",
      element: <AppECommProductList />,
    },
    {
      path: "/e-commerce/checkout",
      element: <AppECommCheckout />,
    },

    {
      path: "/inventory",
      element: <Inventory />,
    },
    {
      children: [
        {
          path: "commission",
          element: <Commissiom />,
        },
        {
          path: "add-commission",
          element: <AddCommissiom />,
        },
        {
          path: "edit-commission/:id",
          element: <EditCommissiom />,
        },
      ],
    },
    {
      children: [
        {
          path: "sub-category",
          element: <SubCategory />,
        },
        {
          path: "add-subcategory",
          element: <AddSubCategory />,
        },
        {
          path: "edit-subcategory/:id",
          element: <EditSubCategory />,
        },
        {
          path: "view-subcategory/:id",
          element: <ViewSubCategory />,
        },
      ],
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
          path: "edit-roles/:id",
          element: <EditRole />,
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
          path: "franchise",
          element: <Franchise />,
        },
        {
          path: "franchise-request-form",
          element: <FranchiseForm />,
        },
        {
          path: "franchise-request",
          element: <FranchiseRequest />,
        },
        {
          path: "view-franchise-request/:id",
          element: <ViewFranchiseRequest />,
        },
        {
          path: "edit-franchise-request/:id",
          element: <EditFranchiseRequest />,
        },
      ],
    },
    {
      children: [
        {
          path: "franchise-state",
          element: <FranchiseState />,
        },
        {
          path: "add-franchise-state",
          element: <AddFranchiseState />,
        },
        {
          path: "edit-franchise-state/:id",
          element: <EditFranchiseState />,
        },
        {
          path: "franchise-district",
          element: <FranchiseDistrict />,
        },
        {
          path: "add-franchise-district",
          element: <AddFranchiseDistrict />,
        },
        {
          path: "edit-franchise-district/:id",
          element: <EditFranchiseDistrict />,
        },
        {
          path: "franchise-block",
          element: <FranchiseBlock />,
        },
        {
          path: "add-franchise-block",
          element: <AddFranchiseBlock />,
        },
        {
          path: "edit-franchise-block/:id",
          element: <EditFranchiseBlock />,
        },
        {
          path: "franchise-cluster",
          element: <FranchiseCluster />,
        },
        {
          path: "add-franchise-cluster",
          element: <AddFranchiseCluster />,
        },
        {
          path: "edit-franchise-cluster/:id",
          element: <EditFranchiseCluster />,
        },
        {
          path: "franchise-village",
          element: <FranchiseVillage />,
        },
        {
          path: "add-franchise-village",
          element: <AddFranchiseVillage />,
        },
        {
          path: "edit-franchise-village/:id",
          element: <EditFranchiseVillage />,
        },
      ],
    },
    {
      children: [
        {
          path: "state",
          element: <State />,
        },
        {
          path: "edit-state/:id",
          element: <EditState />,
        },
        {
          path: "add-state",
          element: <AddState />,
        },
        // district
        {
          path: "district",
          element: <District />,
        },
        {
          path: "edit-district/:id",
          element: <EditDistrict />,
        },
        {
          path: "add-district",
          element: <AddDistrict />,
        },
        // zip code
        {
          path: "pin-code",
          element: <PinCode />,
        },
        {
          path: "edit-pin-code/:id",
          element: <EditPinCode />,
        },
        {
          path: "add-pin-code",
          element: <AddPinCode />,
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
        {
          path: "view-attendence",
          element: <ViewAttedance />,
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
