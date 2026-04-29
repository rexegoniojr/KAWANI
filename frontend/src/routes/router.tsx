import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from '@tanstack/react-router';
import KawaniLanding from '../pages/KawaniLanding';

// 🌳 Root
const rootRoute = createRootRoute({
    component: () => <Outlet />,
    // notFoundComponent: NotFound,
});

// 🔓 Public Routes
const landingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: KawaniLanding,
});

const routeTree = rootRoute.addChildren([
    landingRoute
]);

// 🚀 Router
export const router = createRouter({
    routeTree,
});

// 🔥 Type safety (important)
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}