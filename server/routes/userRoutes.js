import express from "express";
import registerController from "../controllers/registerController.js";
import loginController from "../controllers/loginController.js";
import updateUserController from "../controllers/updateUserController.js";
import requireSignIn from "../middleware_functions/requireSignIn.js";

// router object
const router = express.Router();

// client register route
router.post("/register", registerController);

// client login route
router.post("/login", loginController);

// client user update route
router.put("/user-update", requireSignIn, updateUserController);

// export
export default router;
