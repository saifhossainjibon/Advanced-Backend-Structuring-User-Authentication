import { Router } from "express";
import { userController } from "./user.controller";

const router = Router() // routing handle korar jonno express amder sundor akta function diye day

// aikhne app.post dai nai karon aita already app.ts e connected
// router.post("/api/users", aikhane just "/" dibo karon already app.ts e url bole dewa ase
// amra just routeing er part aikhne handle korbo baki ta
    //  user.controller.ts e korbo
router.post("/", userController.createUser);
router.get("/",userController.getAllUser);
router.get("/:id",userController.getSingleUser);
router.put("/:id",userController.updateSingleUser);
router.delete("/:id", userController.deleteSingleUser );
export const userRoute =router;