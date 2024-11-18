import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/SuperAdmin/Dashboard/Home')),
        authority: [],
    },
    {
        key: 'businessOwner.dashboard',
        path: '/business-dashboard',
        component: lazy(() => import('@/views/BusinessOwners/Dashboard/Home')),
        authority: [],
    },
    {
        key: 'driver.dashboard',
        path: '/driver-dashboard',
        component: lazy(() => import('@/views/Driver/Dashboard/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'superAdmin.businessManagement',
        path: '/business',
        component: lazy(() => import('@/views/SuperAdmin/Business/Business')),
        authority: [],
    },
    {
        key: 'superAdmin.addBusiness',
        path: '/add-business',
        component: lazy(() => import('@/views/SuperAdmin/Business/AddBusiness')),
        authority: [],
    },
    {
        key: 'superAdmin.driverManagement',
        path: '/driver',
        component: lazy(() => import('@/views/SuperAdmin/Driver/Driver')),
        authority: [],
    },
    {
        key: 'superAdmin.addDriver',
        path: '/add-driver',
        component: lazy(() => import('@/views/SuperAdmin/Driver/AddDriver')),
        authority: [],
    },
    {
        key: 'superAdmin.payments',
        path: '/income-payments',
        component: lazy(() => import('@/views/SuperAdmin/Payments/IncomingPaymentsTable')),
        authority: [],
    },
    {
        key: 'superAdmin.payments1',
        path: '/payment-history',
        component: lazy(() => import('@/views/SuperAdmin/Payments/PaymentsHistoryTable')),
        authority: [],
    },
    {
        key: 'superAdmin.reports',
        path: '/reports',
        component: lazy(() => import('@/views/SuperAdmin/Reports/ReportsPage')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() =>
            import('@/views/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(() =>
            import('@/views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(() =>
            import('@/views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]