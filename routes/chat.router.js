import { Router } from "express";

//File imports
import MessageManager from "../Dao/managers/msgManager.js";

const router = Router();

const messageManager = new MessageManager();

router.get('/', async (request, response) => {
    
    const messageHistory = await messageManager.getMenssage();

    response.render('chat', {
        messages: messageHistory.message
    });

});

router.get('/chat', async (req,res)=>{
    res.render('chat', {});
})



export default router;