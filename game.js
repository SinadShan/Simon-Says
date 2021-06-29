
const colors = ["red", "blue", "green", "yellow"]
nextSequence()
chosenColor = colors[randomNumber]
gamePattern = Array()

// alert(chosenColor)
$("#"+chosenColor).fadeOut(100).fadeIn(100)
gamePattern.push(chosenColor)
playSound(chosenColor)


$(".btn").click(function(){
    var clickedColor = this.classList[1]
    playSound(clickedColor)
    animateClick(clickedColor)
})

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
    randomNumber = Math.floor(Math.random()*4)
}

