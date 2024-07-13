import { Router } from "express";
import userRoutes from "./user-routes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes);
export default appRouter;
//# sourceMappingURL=index.js.map