import Express from "express";
const router = Express.Router()
import { getUser } from "../controllers/users.js";

router.get('/:userId', getUser)

export default router