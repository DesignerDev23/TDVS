import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    // Business Owner Menu
    {
        key: 'businessOwner',
        path: '',
        title: 'Business Owner',
        translateKey: '',
        icon: 'business',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'businessOwner.dashboard',
                path: '/business-owner/dashboard',
                title: 'Dashboard',
                translateKey: 'nav.businessOwner.dashboard',
                icon: 'singleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'businessOwner.business',
                path: '',
                title: 'Business',
                translateKey: 'nav.businessOwner.business',
                icon: 'business',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'businessOwner.business.registration',
                        path: '/business-owner/business/registration',
                        title: 'Business Registration',
                        translateKey: 'nav.businessOwner.business.registration',
                        icon: 'home',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'businessOwner.business.profile',
                        path: '/business-owner/business/profile',
                        title: 'Business Profile',
                        translateKey: 'nav.businessOwner.business.profile',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'businessOwner.orders',
                path: '',
                title: 'Orders',
                translateKey: 'nav.businessOwner.orders',
                icon: 'order',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'businessOwner.orders.active',
                        path: '/business-owner/orders/active',
                        title: 'Active Orders',
                        translateKey: 'nav.businessOwner.orders.active',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'businessOwner.orders.completed',
                        path: '/business-owner/orders/completed',
                        title: 'Completed Orders',
                        translateKey: 'nav.businessOwner.orders.completed',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'businessOwner.reports',
                path: '',
                title: 'Reports',
                translateKey: 'nav.businessOwner.reports',
                icon: 'report',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'businessOwner.reports.sales',
                        path: '/business-owner/reports/sales',
                        title: 'Sales Report',
                        translateKey: 'nav.businessOwner.reports.sales',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'businessOwner.reports.violation',
                        path: '/business-owner/reports/violation',
                        title: 'Violation Report',
                        translateKey: 'nav.businessOwner.reports.violation',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
    // Driver Menu
    {
        key: 'driver',
        path: '',
        title: 'Driver',
        translateKey: '',
        icon: 'driver',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'driver.dashboard',
                path: '/driver/dashboard',
                title: 'Dashboard',
                translateKey: 'nav.driver.dashboard',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'driver.rides',
                path: '',
                title: 'Rides',
                translateKey: 'nav.driver.rides',
                icon: 'ride',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'driver.rides.active',
                        path: '/driver/rides/active',
                        title: 'Active Rides',
                        translateKey: 'nav.driver.rides.active',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'driver.rides.completed',
                        path: '/driver/rides/completed',
                        title: 'Completed Rides',
                        translateKey: 'nav.driver.rides.completed',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'driver.payments',
                path: '',
                title: 'Payments',
                translateKey: 'nav.driver.payments',
                icon: 'payments',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'driver.payments.incoming',
                        path: '/driver/payments/incoming',
                        title: 'Incoming Payments',
                        translateKey: 'nav.driver.payments.incoming',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'driver.payments.history',
                        path: '/driver/payments/history',
                        title: 'Payment History',
                        translateKey: 'nav.driver.payments.history',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'driver.support',
                path: '/driver/support',
                title: 'Support',
                translateKey: 'nav.driver.support',
                icon: 'support',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig