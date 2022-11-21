import express from 'express'
import {signIn, signUp} from '../../controllers/auth.controller'
const router = express.Router()

router.post("/auth/signup", signUp)
router.post("/auth/login", signIn)

const authRouter = router
export default authRouter