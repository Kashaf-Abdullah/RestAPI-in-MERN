const express=require('express')
const router=express.Router()
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}
  =require('../controllers/getController')


// router.get('/',(req,res)=>{
//     res.status(200).json({message:'gget goals'})
//     res.send('goals')
// })


router.route('/').get(getGoals).post(setGoals)

router.route('/:id').delete(deleteGoals).put(updateGoals)



// router.get('/',getGoals)


// router.post('/',setGoals)



// router.put('/:id',updateGoals)




// router.delete('/:id',deleteGoals)

module.exports=router