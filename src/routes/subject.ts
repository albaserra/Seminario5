import { Request, Response, Router } from "express";
import { delete_Subject,get_ListaAsignaturas,get_ListaUsuarios,get_Subject,get_Subjects,matriculate_Subject,post_Subject, update_Subject } from "../controllers/subject";

const router=Router();

router.get("/all",get_Subjects);
router.get("/:idSubject",get_Subject);
router.post("/",post_Subject);
router.put("/:idSubject",update_Subject);
router.delete("/:idSubject",delete_Subject);
router.post("/matriculate",matriculate_Subject);
router.get("/listusers/:idSubject", get_ListaUsuarios);
router.get("/listsubjects/:idUser", get_ListaAsignaturas)

export{router};
