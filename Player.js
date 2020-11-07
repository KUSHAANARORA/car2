class Player{
    constructor() {
        this.name = null
        this.distance = 0
        this.index = null
    }
    getCount() {
        var playercountref = database.ref("playerCount")
        playercountref.on("value", function(data){
            playerCount = data.val()
        })
    }                               
    updateCount(count) {
        database.ref("/").update({
            playerCount:count
        }) 

    }
    update() {
        var PlayerIndex = "players/player" + playerCount
        database.ref(PlayerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo() {
        var playerref = database.ref("players")
        playerref.on("value", (data)=>{
            allPlayers = data.val()
        })
    }
}
