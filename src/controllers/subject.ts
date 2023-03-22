import { Request,Response } from "express";
import { insertSubject,getSubject,getSubjects,updateSubject,deleteSubject, matriculateSubject} from "../services/subject";
import { handleHttp } from "../utils/error.handle";
import { User } from "../interfaces/user.interface";
import { Subject } from "../interfaces/subject.interface";
import { ObjectId } from 'mongodb';

const get_Subject = async({params}:Request,res:Response)=>{
    try{
        const {idSubject} = params;
        const response = await getSubject(idSubject);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_SUBJECT");
    }
};

const get_Subjects = async (req:Request,res:Response) => {
    try{
        const response = await getSubjects();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_SUBJECT");
    }
};

const update_Subject = async ({params,body}:Request,res:Response)=>{
    try{
        const {idSubject} = params;
        const response = await updateSubject(idSubject,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_SUBJECT");
    }
};

const post_Subject = async ({body}:Request,res:Response)=>{
    try{
        const response = await insertSubject(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_POST_SUBJECT");
    }
};

const delete_Subject = async ({params}:Request,res:Response)=>{
    try{
        const {idSubject} = params;
        const response = await deleteSubject(idSubject);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_SUBJECT");
    }
};

const matriculate_Subject = async ({body}:Request,res:Response)=>{
    try{
        const { idUser, idSubject } = body;
        const response = await matriculateSubject(idUser, idSubject);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_MATRICULATE_IN_A_SUBJECT");
    }
};

const get_ListaAsignaturas = async({params}:Request,res:Response)=>{  
    try{
        const {idUser} = params;
        const response = await getListaAsignaturas(idUser);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ASIGNATURAS");
    }
};

const get_ListaUsuarios = async({params}:Request,res:Response)=>{  
    try{
        const {idSubject} = params;        
        const response = await getListaUsuarios(idSubject);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USUARIOS");
    }
};

export{get_Subject,get_Subjects,post_Subject,update_Subject,delete_Subject,matriculate_Subject, get_ListaAsignaturas, get_ListaUsuarios};