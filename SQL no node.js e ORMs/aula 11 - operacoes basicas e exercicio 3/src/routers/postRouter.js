const { Router } = require("express");
const PostControler = require("../controllers/PostController.js");

const router = Router();

router.get("/posts", PostControler.index);
router.get("/posts/:id", PostControler.show);
router.get("/posts/byUser/:userId", PostControler.list);
router.post("/posts", PostControler.save);
router.put("/posts/:postId", PostControler.update);
router.delete("/posts/:postId", PostControler.delete);

module.exports = router;
