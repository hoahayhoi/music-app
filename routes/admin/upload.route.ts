import { Router } from "express";
const router: Router = Router();
import multer from "multer";
import * as controller from "../../controllers/admin/upload.controller";

import { uploadSingle } from "../../middelwares/admin/uploadCloud.middleware";
const upload = multer();

router.post(
  "/",
  upload.single("file"),
  uploadSingle,
  controller.index
);

export const uploadRoutes: Router = router;