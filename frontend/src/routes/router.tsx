import * as React from 'react';
import {
    createRootRoute,
    createRoute,
    createRouter,
    createBrowserHistory,
    Outlet,
} from '@tanstack/react-router';

const KawaniLogin = React.lazy(() => import('../pages/login/KawaniLogin'));

const PageSuspense = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {children}
        </React.Suspense>
    );
}

/** Root — wraps the entire tree */
const rootRoute = createRootRoute({
    component: () => (
        <PageSuspense>
            <Outlet />
        </PageSuspense>
    ),
    // notFoundComponent: () => (
    //     <PageSuspense>
    //         <NotFound />
    //     </PageSuspense>
    // ),
});

/** / — public landing */
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => (
        <PageSuspense>
            <KawaniLogin />
        </PageSuspense>
    ),
});
// ---------------------------------------------------------------------------
// Route tree
// ---------------------------------------------------------------------------
const routeTree = rootRoute.addChildren([
    indexRoute,
]);

// ---------------------------------------------------------------------------
// Router instance
// ---------------------------------------------------------------------------
const router = createRouter({
    routeTree,
    history: createBrowserHistory(),
    defaultPreload: 'intent',   // preloads route on hover / focus
});

// Register router type globally for full TypeScript inference
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export { router };