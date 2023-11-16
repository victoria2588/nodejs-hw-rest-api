const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authencticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authencticate, ctrl.listContacts);

router.get("/:contactId", authencticate, isValidId, ctrl.contactById);

router.post(
  "/",
  authencticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:contactId",
  authencticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authencticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:contactId", authencticate, isValidId, ctrl.removeContact);

module.exports = router;
