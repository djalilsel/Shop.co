import Express from "express";
const router = Express.Router()
import { getUser, getCart, addCartItem, deleteCartItem, updateQuantity } from "../controllers/users.js";

router.get('/:userId', getUser)
router.get('/cart/:userId', getCart)
router.post('/cart/add/item', addCartItem)
router.post('/cart/delete/item', deleteCartItem)
router.patch('/cart/update/item', updateQuantity)

export default router