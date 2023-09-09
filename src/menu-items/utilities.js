// assets
import { IconReport, IconUsers, IconFileText, IconQuestionMark, IconFolder, IconBooks } from '@tabler/icons';
// constant
const icons = {
    IconReport,
    IconUsers,
    IconFileText,
    IconQuestionMark,
    IconFolder,
    IconBooks
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'banner',
            title: 'Banner',
            type: 'item',
            url: '/banner',
            icon: icons.IconFileText
        },
        {
            id: 'category',
            title: 'Category',
            type: 'item',
            url: '/category',
            icon: icons.IconReport
        },
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/product',
            icon: icons.IconFileText
        },
        {
            id: 'staffmanagement',
            title: 'Staff Management',
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'role',
                    title: 'Roles',
                    type: 'item',
                    url: '/role',
                    breadcrumbs: false
                },
                {
                    id: 'permission',
                    title: 'Permission',
                    type: 'item',
                    url: '/permission',
                    breadcrumbs: false
                },
                {
                    id: 'staff-users',
                    title: 'Staff Users',
                    type: 'item',
                    url: '/staff-users',
                    breadcrumbs: false
                },
                {
                    id: 'add-staff',
                    title: 'Add Staff',
                    type: 'item',
                    url: '/add-staff',
                    breadcrumbs: false
                }
            ]
        },
        // {
        //     id: 'hrm',
        //     title: 'HRM',
        //     type: 'collapse',
        //     icon: icons.IconUsers,
        //     breadcrumbs: false,
        //     children: [
        //         {
        //             id: 'attedance',
        //             title: 'Attedance',
        //             type: 'item',
        //             url: '/attedance',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'leave',
        //             title: 'Leaves',
        //             type: 'item',
        //             url: '/leave',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'holidays',
        //             title: 'Holidays',
        //             type: 'item',
        //             url: '/holidays',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'appreciations',
        //             title: 'Appreciations',
        //             type: 'item',
        //             url: '/appreciations',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        {
            id: 'purchase',
            title: 'Purchase History',
            type: 'item',
            url: '/purchase-history',
            icon: icons.IconFileText
        },
        {
            id: 'users',
            title: 'Users',
            type: 'collapse',
            icon: icons.IconUsers,
            breadcrumbs: false,
            children: [
                {
                    id: 'all-users',
                    title: 'All Users',
                    type: 'item',
                    url: '/users',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
