var mongoose=require('mongoose')
var Player=mongoose.model('Player')
module.exports={
  index:(req,res)=>{
    console.log('hit index')
    Player.find({},(err,foundPlayers)=>{
      console.log('found the players in index')
      res.json(foundPlayers)
    })
  },
  create:(req,res)=>{
    var newPlayer=new Player(req.body)
    newPlayer.save((err)=>{
      if(err){
        res.json(err)
      }
      else{
        console.log('Created a new Player', req.body)
        res.json(newPlayer)
      }
    })
  },
  destroy:(req,res)=>{
    console.log('hit destroy')
    Player.remove({_id:req.params.id},(err)=>{
      if(err){
        console.log('oh no')
      }
      else{
        console.log('deleted player!')
        res.json('deleted player')
      }
    })
  },
  update:(req,res)=>{
    console.log('hit changeStatus')
    var updateObject={}
    updateObject['game'+req.body.number+'Status']=req.body.status
    Player.update({_id:req.params.id}, updateObject, function(err,updatedPlayer){
      if(err){
        console.log('couldnt update')
        res.json(err)
      }
      else{
        console.log('updated player')
        res.json(updatedPlayer)
      }
    })
  }
}
