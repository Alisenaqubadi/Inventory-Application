import { insertItem } from "../modules/db/updataData.js"

export default {
    getNewItem: async (req,res)=>{
        res.render("newItem")
    },
    postNewItem: async (req,res)=>{
        const newItem = req.body.item;
        await insertItem(newItem)
        res.redirect("/")
    }
}