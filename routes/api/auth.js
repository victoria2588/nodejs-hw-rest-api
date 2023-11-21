const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authencticate, upload } = require("../../middlewares");

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

router.patch(
  "/avatars",
  authencticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
