import {Router} from "express"
import { UserRoutes } from "../modules/user/user.route";


const router=Router();



const moduleRoutes=[{
    path:'users',
    route:UserRoutes
}]

//  router.use("/users",UserRoutes);
moduleRoutes.forEach(route=>router.use(`/${route.path}`, route.route));

export default router;