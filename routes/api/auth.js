const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authencticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authencticate, ctrl.getCurrent);

router.post("/logout", authencticate, ctrl.logout);

router.patch(
  "/subscription",
  authencticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.subscription
);

module.exports = router;
