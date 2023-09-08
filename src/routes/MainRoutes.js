import { lazy } from "react";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
// dashboard routing
const Dashboard = Loadable(lazy(() => import("views/dashboard/Default")));

//Product Route
const Product = Loadable(lazy(() => import("views/utilities/pruduct/product")));
const AddProduct = Loadable(
  lazy(() => import("views/utilities/pruduct/add-product"))
);
const EditProduct = Loadable(
  lazy(() => import("views/utilities/pruduct/edit-product"))
);

//News Route
const News = Loadable(lazy(() => import("views/utilities/news/news")));
const AddNews = Loadable(lazy(() => import("views/utilities/news/add-news")));
const EditNews = Loadable(lazy(() => import("views/utilities/news/edit-news")));

//Map Route
const Map = Loadable(lazy(() => import("views/utilities/maps/map")));
const EditMap = Loadable(lazy(() => import("views/utilities/maps/edit-map")));

//Post Route
const Post = Loadable(lazy(() => import("views/utilities/post/post")));
const AddPost = Loadable(lazy(() => import("views/utilities/post/add-post")));
const EditPost = Loadable(lazy(() => import("views/utilities/post/edit-post")));

//User Route
const User = Loadable(lazy(() => import("views/utilities/users/user")));
const AddUser = Loadable(lazy(() => import("views/utilities/users/add-user")));
const EditUser = Loadable(
  lazy(() => import("views/utilities/users/edit-user"))
);

//Task Route
const Task = Loadable(
  lazy(() => import("views/utilities/task-management/task"))
);
const AddTask = Loadable(
  lazy(() => import("views/utilities/task-management/add-task"))
);
const EditTask = Loadable(
  lazy(() => import("views/utilities/task-management/edit-task"))
);

//VoterList Route
const FamilyList = Loadable(
  lazy(() => import("views/utilities/voter-list/family-list"))
);
const AddFamily = Loadable(
  lazy(() => import("views/utilities/voter-list/add-family-list"))
);

const EditFamily = Loadable(
  lazy(() => import("views/utilities/voter-list/edit-family-list"))
);

const MembersList = Loadable(
  lazy(() => import("views/utilities/voter-list/member-list"))
);

const AddMember = Loadable(
  lazy(() => import("views/utilities/voter-list/add-member-list"))
);
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
      children: [
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        ,
        {
          path: "edit-product/:id",
          element: <EditProduct />,
        },
      ],
    },
    {
      children: [
        {
          path: "news",
          element: <News />,
        },
        {
          path: "add-news",
          element: <AddNews />,
        },
        ,
        {
          path: "edit-news/:id",
          element: <EditNews />,
        },
      ],
    },
    {
      children: [
        {
          path: "maps",
          element: <Map />,
        },
        {
          path: "edit-map/:id",
          element: <EditMap />,
        },
      ],
    },
    {
      children: [
        {
          path: "family-list",
          element: <FamilyList />,
        },
        {
          path: "add-family",
          element: <AddFamily />,
        },
        {
          path: "edit-family/:id",
          element: <EditFamily />,
        },
        {
          path: "member-list",
          element: <MembersList />,
        },
        {
          path: "add-member/:id",
          element: <AddMember />,
        },
      ],
    },
    {
      children: [
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "add-post",
          element: <AddPost />,
        },
        {
          path: "edit-post/:id",
          element: <EditPost />,
        },
      ],
    },
    {
      children: [
        {
          path: "task",
          element: <Task />,
        },
        {
          path: "add-task",
          element: <AddTask />,
        },
        {
          path: "edit-task/:id",
          element: <EditTask />,
        },
      ],
    },
    {
      children: [
        {
          path: "user",
          element: <User />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "edit-user/:id",
          element: <EditUser />,
        },
      ],
    },
  ],
};

export default MainRoutes;
