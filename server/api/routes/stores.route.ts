import { Router } from "express";
import storesController from "../../controllers/stores.controller";

const router = Router();

router.post("/", storesController.createStore);
router.get("/", storesController.getStores);
router.get("/:id", storesController.getStore);
router.patch("/:id", storesController.updateStore);
router.delete("/:id", storesController.deleteStore);

const storesRoute = router;

export default storesRoute;
