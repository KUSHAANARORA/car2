class Game{
    constructor() {

    }
    getState() {
      var gamestateref = database.ref("gameState")
      gamestateref.on("value",function(data){
         gameState = data.val() 
      })  
    }
    start() {
        if (gameState === 0) {
            player = new Player()
            player.getCount()
            form = new Form()
            form.display();
        }
    }
    update(state) {
        database.ref("/").update({
            gameState:state
        })
    }
    play() {
      form.hide()
      textSize(30)
      text("Game Start",120,100)
      Player.getPlayerInfo()
      if(allPlayers !== undefined) {
        //   console.log(allPlayers)
          var y = 130
          for(var i in allPlayers) {
              y = y + 30
              if(i === "player" + player.index) {
                fill("red") 
              }
              else {
                fill("black")    
              }
            textSize(15)
            text(allPlayers[i].name + ":" + allPlayers[i].distance,120, y)
            
          }
      }
      console.log(player.index)
      if (keyIsDown(UP_ARROW)&& player.index!== null) {
          player.distance = player.distance+50
          player.update()
      } 
    }
}