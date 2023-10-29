import { FormattedMessage } from "react-intl";
import { getUserLocal } from "utils/localStorage.util";
// assets
import {
  IconCategory,
  IconShoppingCart,
  IconBuildingStore,
  IconReport,
  IconMilitaryRank,
  IconBuildingSkyscraper,
  IconUsers,
  IconFileText,
  IconQuestionMark,
  IconFolder,
  IconBooks,
  IconListDetails,
  IconCash,
  IconBasket,
  IconAdjustmentsHorizontal,
} from "@tabler/icons";
// constant
const icons = {
  IconCategory,
  IconShoppingCart,
  IconBuildingStore,
  IconReport,
  IconMilitaryRank,
  IconBuildingSkyscraper,
  IconUsers,
  IconFileText,
  IconQuestionMark,
  IconFolder,
  IconBooks,
  IconListDetails,
  IconCash,
  IconBasket,
  IconAdjustmentsHorizontal,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const userId = getUserLocal();
// console.log(userId);
var Parent = [];
if (userId) {
  if (userId.Type === "Admin") {
    Parent = [
      {
        id: "banner",
        title: "Banner",
        type: "item",
        url: "/banner",
        icon: icons.IconBooks,
      },
      {
        id: "category",
        title: "Category",
        type: "item",
        url: "/category",
        icon: icons.IconCategory,
      },
      {
        id: "subcategory",
        title: "Sub-Category",
        type: "item",
        url: "/sub-category",
        icon: icons.IconCategory,
      },
      {
        id: "product",
        title: "Product",
        type: "item",
        url: "/product",
        icon: icons.IconShoppingCart,
      },
      {
        id: "manage area",
        title: "Manage Area",
        type: "collapse",
        icon: icons.IconListDetails,
        children: [
          {
            id: "state",
            title: "State",
            type: "item",
            url: "/state",
            breadcrumbs: false,
          },
          {
            id: "district",
            title: "District",
            type: "item",
            url: "/district",
            breadcrumbs: false,
          },
          {
            id: "block",
            title: "Block",
            type: "item",
            url: "/block",
            breadcrumbs: false,
          },
          {
            id: "cluster",
            title: "Cluster",
            type: "item",
            url: "/cluster",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "hrm",
        title: "HRM",
        type: "collapse",
        icon: icons.IconUsers,
        breadcrumbs: false,
        children: [
          {
            id: "attedance",
            title: "Attedance",
            type: "item",
            url: "/attedance",
            breadcrumbs: false,
          },
          {
            id: "holidays",
            title: "Holidays",
            type: "item",
            url: "/holidays",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "staffmanagement",
        title: "Staff Management",
        type: "collapse",
        icon: icons.IconMilitaryRank,
        children: [
          {
            id: "role",
            title: "Roles",
            type: "item",
            url: "/role",
            breadcrumbs: false,
          },
          {
            id: "staff-users",
            title: "Staff Users",
            type: "item",
            url: "/staff-users",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "inventory",
        title: "Inventory",
        type: "item",
        url: "/inventory",
        icon: icons.IconBuildingStore,
      },
      {
        id: "incharge",
        title: "Incharge",
        type: "collapse",
        icon: icons.IconAdjustmentsHorizontal,
        breadcrumbs: false,
        children: [
          {
            id: "incharge-state",
            title: "State Incharge",
            type: "collapse",
            breadcrumbs: false,
            children: [
              {
                id: "incharge-state",
                title: "State Incharge",
                type: "item",
                url: "/franchise-state",
                breadcrumbs: false,
              },
              {
                id: "pending-request",
                title: "Pending Request",
                type: "item",
                url: "/pending-request-state-incharge",
                breadcrumbs: false,
              },
              {
                id: "add-new",
                title: "Add New",
                type: "item",
                url: "/add-franchise-state",
                breadcrumbs: false,
              },
            ],
          },
          {
            id: "incharge-district",
            title: "District Incharge",
            type: "collapse",
            breadcrumbs: false,
            children: [
              {
                id: "incharge-district",
                title: "District Incharge",
                type: "item",
                url: "/franchise-district",
                breadcrumbs: false,
              },
              {
                id: "pending-request",
                title: "Pending Request",
                type: "item",
                url: "/pending-request-district-incharge",
                breadcrumbs: false,
              },
              {
                id: "add-new",
                title: "Add New",
                type: "item",
                url: "/add-franchise-district",
                breadcrumbs: false,
              },
            ],
          },
          {
            id: "incharge-block",
            title: "Block Incharge",
            type: "collapse",
            breadcrumbs: false,
            children: [
              {
                id: "incharge-block",
                title: "Block Incharge",
                type: "item",
                url: "/franchise-block",
                breadcrumbs: false,
              },
              {
                id: "pending-request",
                title: "Pending Request",
                type: "item",
                url: "/pending-request-block-incharge",
                breadcrumbs: false,
              },
              {
                id: "add-new",
                title: "Add New",
                type: "item",
                url: "/add-franchise-block",
                breadcrumbs: false,
              },
            ],
          },
          {
            id: "incharge-cluster",
            title: "Cluster Incharge",
            type: "collapse",
            breadcrumbs: false,
            children: [
              {
                id: "incharge-block",
                title: "Cluster Incharge",
                type: "item",
                url: "/franchise-cluster",
                breadcrumbs: false,
              },
              {
                id: "pending-request",
                title: "Pending Request",
                type: "item",
                url: "/pending-request-Cluster-incharge",
                breadcrumbs: false,
              },
              {
                id: "add-new",
                title: "Add New",
                type: "item",
                url: "/add-franchise-cluster",
                breadcrumbs: false,
              },
            ],
          },
        ],
      },
      {
        id: "franchise",
        title: "Franchise",
        type: "collapse",
        icon: icons.IconBuildingSkyscraper,
        breadcrumbs: false,
        children: [
          {
            id: "franchise-request",
            title: "Active Franchise",
            type: "item",
            url: "/franchise-request",
            breadcrumbs: false,
          },
          {
            id: "franchise",
            title: "Pending Franchise",
            type: "item",
            url: "/franchise",
            breadcrumbs: false,
          },
          {
            id: "franchise-recommendation-form",
            title: "Add Franchise",
            type: "item",
            url: "/franchise-request-form",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "order",
        title: "Order History",
        type: "collapse",
        icon: icons.IconUsers,
        breadcrumbs: false,
        children: [
          {
            id: "Franchise Order History",
            title: "Franchise Order History",
            type: "collapse",
            breadcrumbs: false,
            children: [
              {
                id: "complete-by-franchise",
                title: "Online",
                type: "item",
                url: "/complete-order-by-franchise",
                breadcrumbs: false,
              },
              {
                id: "pending-by-franchise",
                title: "Cash on delivery",
                type: "item",
                url: "/pending-order-by-franchise",
                breadcrumbs: false,
              },
            ],
          },
          {
            id: "Farmer Order History",
            title: "Farmer Order History",
            type: "collapse",
            breadcrumbs: false,
            children: [
              {
                id: "complete-by-farmer",
                title: "Online",
                type: "item",
                url: "/complete-order-by-farmer",
                breadcrumbs: false,
              },
              {
                id: "pending-by-farmer",
                title: "Cash On Delivery",
                type: "item",
                url: "/pending-order-by-farmer",
                breadcrumbs: false,
              },
            ],
          },
        ],
      },
      // {
      //   id: "order",
      //   title: "Order History",
      //   type: "collapse",
      //   icon: icons.IconUsers,
      //   breadcrumbs: false,
      //   children: [
      //     {
      //       id: "complete-order",
      //       title: "Complete Order",
      //       type: "item",
      //       url: "/complete-order",
      //       breadcrumbs: false,
      //     },
      //     {
      //       id: "pending-order",
      //       title: "Pending Order",
      //       type: "item",
      //       url: "/pending-order",
      //       breadcrumbs: false,
      //     },
      //   ],
      // },
      // {
      //   id: "farmer-order",
      //   title: "Farmer Order History",
      //   type: "collapse",
      //   icon: icons.IconUsers,
      //   breadcrumbs: false,
      //   children: [
      //     {
      //       id: "complete-order",
      //       title: "Complete Order",
      //       type: "item",
      //       url: "/complete-order",
      //       breadcrumbs: false,
      //     },
      //     {
      //       id: "pending-order",
      //       title: "Pending Order",
      //       type: "item",
      //       url: "/pending-order",
      //       breadcrumbs: false,
      //     },
      //   ],
      // },
      {
        id: "transaction-history",
        title: "Transaction History",
        type: "item",
        url: "/transaction-history",
        icon: icons.IconCash,
      },
      {
        id: "commission-history",
        title: "Commission History",
        type: "item",
        url: "/commission-history",
        icon: icons.IconCash,
      },
      // {
      //   id: "commission",
      //   title: "Commission",
      //   type: "item",
      //   url: "/commission",
      //   icon: icons.IconCash,
      // },
      {
        id: "farmers",
        title: "Farmers",
        type: "collapse",
        icon: icons.IconUsers,
        breadcrumbs: false,
        children: [
          {
            id: "all-farmers",
            title: "Farmers",
            type: "item",
            url: "/users",
            breadcrumbs: false,
          },
        ],
      },
    ];
  } else if (userId.Type === "Franchise") {
    Parent = [
      {
        id: "our-product",
        title: <FormattedMessage id="Our-Product" />,
        type: "collapse",
        icon: icons.IconBasket,
        children: [
          {
            id: "products",
            title: <FormattedMessage id="products" />,
            type: "item",
            url: "/e-commerce/products",
          },
          {
            id: "checkout",
            title: <FormattedMessage id="checkout" />,
            type: "item",
            url: "/e-commerce/checkout",
          },
        ],
      },
      {
        id: "order history",
        title: "Order History",
        type: "collapse",
        icon: icons.IconUsers,
        breadcrumbs: false,
        children: [
          {
            id: "complete-by-farmer",
            title: "Online",
            type: "item",
            url: "/complete-order-by-farmer",
            breadcrumbs: false,
          },
          {
            id: "pending-by-farmer",
            title: "Cash On Delivery",
            type: "item",
            url: "/pending-order-by-farmer",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "transaction-history",
        title: "Transaction History",
        type: "item",
        url: "/transaction-history",
        icon: icons.IconCash,
      },
      {
        id: "farmers",
        title: "Farmers",
        type: "collapse",
        icon: icons.IconUsers,
        breadcrumbs: false,
        children: [
          {
            id: "all-farmers",
            title: "Farmers",
            type: "item",
            url: "/users",
            breadcrumbs: false,
          },
        ],
      },
    ];
  }
}

// reload();

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: Parent,
};

export default utilities;
