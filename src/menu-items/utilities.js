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
            id: "pin-code",
            title: "Pin Code",
            type: "item",
            url: "/pin-code",
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
        id: "franchise",
        title: "Franchise",
        type: "collapse",
        icon: icons.IconBuildingSkyscraper,
        breadcrumbs: false,
        children: [
          {
            id: "franchise",
            title: "All Active Franchise",
            type: "item",
            url: "/franchise",
            breadcrumbs: false,
          },
          {
            id: "franchise-request",
            title: "Franchise Request",
            type: "item",
            url: "/franchise-request",
            breadcrumbs: false,
          },
          {
            id: "franchise-recommendation-form",
            title: "Recommended Franchise",
            type: "item",
            url: "/franchise-request-form",
            breadcrumbs: false,
          },
          {
            id: "franchise-state",
            title: "Franchise State",
            type: "item",
            url: "/franchise-state",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "users",
        title: "Users",
        type: "collapse",
        icon: icons.IconUsers,
        breadcrumbs: false,
        children: [
          {
            id: "all-users",
            title: "All Users",
            type: "item",
            url: "/users",
            breadcrumbs: false,
          },
        ],
      },
      {
        id: "purchase",
        title: "Purchase History",
        type: "item",
        url: "/purchase-history",
        icon: icons.IconFileText,
      },
      {
        id: "commission",
        title: "Commission",
        type: "item",
        url: "/commission",
        icon: icons.IconCash,
      },
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
    ];
  } else if(userId.Type === ""){

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
