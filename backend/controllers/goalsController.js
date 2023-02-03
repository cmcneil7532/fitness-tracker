//Desc Get 
//Route GET fitness/goals
const getGoals = async(req,res)=>{
    res.send('Get Goals function')
}
//Desc Get 
//Route GET fitness/goals
const setGoals = async(req,res)=>{
    res.send('Set Goals function')
}
//Desc Get 
//Route GET fitness/goals
const updateGoals = async(req,res)=>{
    res.send('Update Goals function')
}
//Desc Get 
//Route GET fitness/goals
const deleteGoals = async(req,res)=>{
    res.send('Delete Goals function')
}

module.exports={
    getGoals, setGoals, updateGoals, deleteGoals
}