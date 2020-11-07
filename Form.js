class Form{
    constructor(){
       this.button = createButton("Play")
       this.InputBox = createInput("Name")
       this.greeting = createElement("h3")
    }
    display() {
      var title = createElement("h2")
      title.html("Car Racing Game")  
      title.position(displayWidth/2 -50,0)
      this.InputBox.position(displayWidth/2 -40,displayHeight/2 -80)
      this.button.position(displayWidth/2 +30,displayHeight/2)
      

      this.button.mousePressed(()=> {
          this.InputBox.hide()
          this.button.hide()
          this.greeting.html("Hi "+ this.InputBox.value())
          this.greeting.position(displayWidth/2 -70,displayHeight/4)
          playerCount = playerCount + 1;
          player.index = playerCount
          player.name = this.InputBox.value()
          player.updateCount(playerCount)
          player.update()
      })
    }
    hide() {
      this.button.hide()
      this.InputBox.hide()
      this.greeting.hide()
    }
}