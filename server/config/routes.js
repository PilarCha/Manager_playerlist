var Players=require('./../controllers/players.js')
var path=require('path')
var fs=require('fs')
module.exports=(app)=>{
  app.post('/api/players', Players.create)
  app.get('/api/players',Players.index)
  app.delete('/api/players/:id',Players.destroy)
  app.put('/api/players/:id',Players.update)
  app.all('*', (req,res,next)=>{
    res.sendFile(path.resolve("./client/dist/index.html"))
  })

}
