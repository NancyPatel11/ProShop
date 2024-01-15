const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  logout,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logout);
router.post("/auth", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

module.exports = router;
