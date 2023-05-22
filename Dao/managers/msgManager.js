import messageModel from "../models/messages.js";

export default class MessageManager{

    async getMenssage(){
        try{
            return await messageModel.find()
        }catch(error){
            return { status: "error", error: error };
        }
    }

    async addMenssage(message){
        try{
            return messageModel.create(message);
        }catch(error){
            return { status: "error", error: error}
        }
    }
}