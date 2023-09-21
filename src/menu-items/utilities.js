import { FormattedMessage } from 'react-intl';
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
  IconBasket
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
  IconBasket
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

var Parent = [
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
      id: 'e-commerce',
      title: <FormattedMessage id="e-commerce" />,
      type: 'collapse',
      icon: icons.IconBasket,
      children: [
          {
              id: 'products',
              title: <FormattedMessage id="products" />,
              type: 'item',
              url: '/e-commerce/products'
          },
          {
              id: 'product-details',
              title: <FormattedMessage id="product-details" />,
              type: 'item',
              url: '/e-commerce/product-details/1',
              breadcrumbs: false
          },
          {
              id: 'product-list',
              title: <FormattedMessage id="product-list" />,
              type: 'item',
              url: '/e-commerce/product-list',
              breadcrumbs: false
          },
          {
              id: 'checkout',
              title: <FormattedMessage id="checkout" />,
              type: 'item',
              url: '/e-commerce/checkout'
          }
      ]
  }
];

const permission = JSON.parse(localStorage.getItem("permission"));
// console.log("permission: " + permission);
if (permission) {
  const roles = () => {
    Promise.all(
      permission.map((data) => {
        const module = data.Module;
        if (module == "Product" && data.Read) {
          Parent.push({
            id: "product",
            title: "Product",
            type: "item",
            url: "/product",
            icon: icons.IconShoppingCart,
          });
        }

        if (module == "Staff" && data.Read) {
          Parent.push({
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
          });
        }
        if (module == "Inventory" && data.Read) {
          Parent.push({
            id: "inventory",
            title: "Inventory",
            type: "item",
            url: "/inventory",
            icon: icons.IconBuildingStore,
          });
        }
        if (module == "Frenchise" && data.Read) {
          Parent.push({
            id: "franchise",
            title: "Franchise",
            type: "collapse",
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: false,
            children: [
              {
                id: "franchise",
                title: "Franchise",
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
                id: "franchise-request-form",
                title: "Add Franchise",
                type: "item",
                url: "/franchise-request-form",
                breadcrumbs: false,
              },
            ],
          });
        }
        if (module == "User" && data.Read) {
          Parent.push({
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
          });
        }
        if (module == "Purchase History" && data.Read) {
          Parent.push(
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
            }
          );
        }
      })
    );
  };

  roles();
}

// reload();

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: Parent,
};

export default utilities;
