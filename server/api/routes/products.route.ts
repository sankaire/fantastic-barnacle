import { Router } from "express";
import productsController from "../../controllers/products.controller";
const router = Router();

router.post("/", productsController.createProductController);
router.get("/", productsController.getProductsController);
router.get("/:id", productsController.getProductController);
router.put("/:id", productsController.updateProductController);
router.delete("/:id", productsController.deleteProductController);

const productsRoute = router;

export default productsRoute;
