// assets
import {
  IconArticle,
  IconMap2,
  IconBrandBlogger,
  IconListNumbers,
  IconUsers,
  IconChecklist,
  IconHandFinger,
} from "@tabler/icons";

// constant
const icons = {
  IconMap2,
  IconArticle,
  IconBrandBlogger,
  IconListNumbers,
  IconUsers,
  IconChecklist,
  IconHandFinger,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "banner",
      title: "Banner",
      type: "item",
      url: "/banner",
      icon: icons.IconListNumbers,
      breadcrumbs: true,
    },
    {
      id: "category",
      title: "Category",
      icon: icons.IconListNumbers,
      type: "collapse",
      children: [
        {
          id: "category-list",
          title: "Category List",
          type: "item",
          url: "/category-list",
          breadcrumbs: true,
        },
        {
          id: "add-category",
          title: "Add Category",
          type: "item",
          url: "/add-category",
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "product-List",
      title: "Product List",
      icon: icons.IconHandFinger,
      type: "collapse",
      children: [
        {
          id: "product-list",
          title: "Product List",
          type: "item",
          url: "/product-list",
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "staffmanagement",
      title: "STAFF MANAGEMENT",
      type: "collapse",
      icon: icons.IconUsers,
      children: [
        {
          id: "role",
          title: "ROLES",
          type: "item",
          url: "/role",
          breadcrumbs: false,
        },
        {
          id: "permission",
          title: "PermissionHistory",
          type: "item",
          url: "/permission-history",
          breadcrumbs: false,
        },
        {
          id: "staff-users",
          title: "STAFF USERS",
          type: "item",
          url: "/staff-users",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "hrm",
      title: "HRM",
      icon: icons.IconBrandBlogger,
      type: "collapse",
      children: [
        {
          id: "attenance",
          title: "Attenance",
          type: "item",
          url: "/attenance",
          breadcrumbs: true,
        },
        {
          id: "leave",
          title: "Leaves",
          type: "item",
          url: "/leave",
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "purchase-history",
      title: "Purchase History",
      icon: icons.IconMap2,
      type: "item",
      url: "/purchase-history",
      breadcrumbs: true,
    },
    {
      id: "users",
      title: "Manage User",
      icon: icons.IconUsers,
      type: "collapse",
      children: [
        {
          id: "user-list",
          title: "User List",
          type: "item",
          url: "/user",
          breadcrumbs: true,
        },
      ],
    },
  ],
};

export default utilities;
