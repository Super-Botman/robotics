import expressWsRoutes  from "express-ws-routes"
import robotControllers from "../Controllers/robotControllers.js"

const { Router } = expressWsRoutes;
let router = Router();

router.websocket('/', robotControllers.helloWorldRequest())

export default router
