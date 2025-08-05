import { createRootRouter } from "@tanstack/react-router";
import RootLayout from "../RootLayout";
import { homePageRoute } from "./homepage";
import { authRoute } from "./auth.route";
import { dashboardRoute } from "./dashboard";


export const rootRoute = createRootRouter({
    component:RootLayout
})

export const routeTree=rootRoute.addChildren([
   homePageRoute,authRoute,dashboardRoute
])
