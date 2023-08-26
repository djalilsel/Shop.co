import Express  from 'express'
import { getNewArrivals, getTopSelling } from '../controllers/products.js'
const router = Express.Router()

router.get("/newarrivals", getNewArrivals)
router.get("/topselling", getTopSelling)
export default router