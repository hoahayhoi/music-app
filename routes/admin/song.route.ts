import { Router } from "express";
const router: Router = Router();
import * as controller from "../../controllers/admin/song.controller";
import multer from "multer"

import { uploadSingle } from "../../middelwares/admin/uploadCloud.middleware";

const upload = multer();

router.get("/", controller.index);

router.get("/create", controller.create);

router.post(
    "/create",
    upload.single("avatar"),
    uploadSingle,
    controller.createPost
);

export const songRoutes: Router = router;