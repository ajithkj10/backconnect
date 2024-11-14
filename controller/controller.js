// import { Data } from '../Data.js';
import {DataModel} from '../model/model.js'

export const homepage =(req,res)=>{
    res.send("welcome")
};

export const getdata =async (req,res)=>{
    try{
        const data= await DataModel.find();
        res.json(data);
    }
    catch(err){
        res.status(500).send("error............................");
    }
}