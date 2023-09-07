import Express  from 'express'
import { getNewArrivals, getProduct, getTopSelling } from '../controllers/products.js'
const router = Express.Router()

router.get("/newarrivals", getNewArrivals)
router.get("/topselling", getTopSelling)
router.get("/:productId", getProduct)
export default router