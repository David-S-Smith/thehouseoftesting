module.exports = msg => {
    var random_boolean = Math.random() >= 0.5;
    Console.log("hilo happened");
    if(random_boolean){
        msg.reply("***High.*** :arrow_up:");
    }
    else{
        msg.reply("***Low.*** :arrow_down:");
    }
}
