const workoutModel = require('../models/createWorkout')

//Desc Get 
//Route GET fitness/goals
const getGoals = async(req,res)=>{



    res.status(200).json({
        message: 'Get goals'
    })
}
//Desc'Set 
//Route'POST fitness/goals
const setGoals = async(req,res)=>{
    res.status(200).json({
        message: 'Set goals'
    })
}
//Desc UPDATE 
//Route PATCH fitness/goals
const updateGoals = async(req,res)=>{
    res.status(200).json({
        message: 'UPDATE goals'
    })
}
//Desc DELETE 
//Route DELETE fitness/goals
const deleteGoals = async(req,res)=>{
    res.status(200).json({
        message: 'DELETE goals'
    })
}

module.exports={
    getGoals, setGoals, updateGoals, deleteGoals
}