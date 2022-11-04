import express from 'express'
import {signUp} from '../../controllers/auth.controller'
const router = express.Router()

router.post("/auth/signup", signUp)

const authRouter = router
export default authRouter