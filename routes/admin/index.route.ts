import { Express } from "express";
import { systemConfig } from "../../config/system";
import { dashboardRoute } from "./dashboard.route";

export const routesAdmin = (app: Express) => { 
    const path = systemConfig.prefixAdmin;

    app.use(`/${path}/dashboard`, dashboardRoute)
}