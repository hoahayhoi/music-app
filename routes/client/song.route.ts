import express from "express";
const router = express.Router();
import * as controller from "../../controllers/client/song.controller";

router.get("/:slugTopic", controller.index);

export const songsRoute = router;