import Express from "express";
import { getHappyReviews } from "../controllers/reviews.js";
const router = Express.Router()

router.get('/happycustomers', getHappyReviews)

export default router