
const colors = ["red", "blue", "green", "yellow"]
var level = 0
var i = 0
var started = false
gamePattern = new Array()
userPattern = new Array()


$(document).keypress(function(){
    if(!started){
        nextSequence()
        started = true
    }
})
// alert(chosenColor)



$(".btn").click(function clicked(){
    if(started)
    {
        var clickedColor = this.classList[1]
        playSound(clickedColor)
        animateClick(clickedColor)
        userPattern.push(clickedColor)
        checkPattern()
    }
    })


function checkPattern()
{
    if (gamePattern[i] == userPattern[i])
    {
        if(i == level-1)
        {
            // $(".btn").unbind("click")
            setTimeout(function(){
                nextSequence()
            },1000)
        }
        else
            i++
    }  
    else
    {
        $("h1").html("<p>Game-over</p><p>Your score: "+(level-1)+"</p>")
        $("body").addClass("game-over")
        setTimeout(()=>$("body").removeClass("game-over"),200)
        level = 0
        userPattern = []
        gamePattern = []
    }
}

function animateClick(color)
{
    setTimeout(()=>$("."+color).removeClass("pressed"),100)
    $("."+color).addClass("pressed")
}

function playSound(name)
{
    var sound = new Audio("sounds/"+name+".mp3")
    sound.play()
}

function nextSequence()
{
    i = 0
    randomNumber = Math.floor(Math.random()*4)
    level++
    $("h1").html("Level "+level)

    userPattern = []
    chosenColor = colors[randomNumber]
    $("#"+chosenColor).fadeOut(100).fadeIn(100)
    gamePattern.push(chosenColor)
    playSound(chosenColor)
}

