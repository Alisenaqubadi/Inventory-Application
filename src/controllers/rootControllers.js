import { getAllItems } from "../modules/db/fetchData.js"

export default {
    getRoot: async (req,res)=>{
        const items = await getAllItems();
        res.render("index", { items })
    },
}