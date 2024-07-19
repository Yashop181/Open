const stuModel = require('../model/stuModel')

const stuSave = (req,res)=>{
    const myData = new stuModel(req.body);
    myData.save().then(res.send('Data saved'))
}

const stuDisplay  = (req,res) =>{
    stuModel.find().then((data)=>{
        res.send(data)
    })
}

const stuDelete = (req,res)=>{
    stuModel.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data)
    })
}
const stuEdit = (req,res) =>{
    stuModel.findByIdAndUpdate(req.params.id,req.body, { new: true }).then((data)=>{
        res.send(data)
    })
}

module.exports={
    stuSave,
    stuDisplay,
    stuDelete,
    stuEdit
}