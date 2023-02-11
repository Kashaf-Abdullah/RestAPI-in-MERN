// npm i express-async-handler
const asyncHandler=require('express-async-handler')

const Goal=require('../model/goalsModel')

//@desc Get goals
//@route GET  /api/goals
//@access private
const getGoals=asyncHandler(async(req,res)=>{

    const goals=await Goal.find()
    res.status(200).json(goals)

    // res.status(200).json({message:'get goals'})
}

)


//@desc Set goals
//@route POST  /api/goals
//@access private
const setGoals=asyncHandler(async(req,res)=>{
   if(!req.body.text){
res.status(400)
throw new Error('plzy add text')   
}

const goals=await Goal.create({
    text:req.body.text
})
res.status(200).json(goals)

})




//@desc update goals
//@route PUT  /api/goals:id
//@access private
const updateGoals=asyncHandler(async(req,res)=>{
  
  const goal=await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('goal not found')

}
  

const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,
    req.body,{
    new:true,
})
    res.status(200).json(updatedGoal)

})



//@desc Delete goals
//@route DELETE  /api/goals:id
//@access private
const deleteGoals=asyncHandler(async(req,res)=>{
  
  
    const goal=await Goal.findById(req.params.id)

    if(!goal){
      res.status(400)
      throw new Error('goal not found')
  
  }
  await goal.remove()  
  
    res.status(200).json({id:req.params.id})
    
}
)

module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}