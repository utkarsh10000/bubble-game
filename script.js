var timer = 60;
var score = 0;
var rn;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    rn = Math.floor(Math.random() * 10 );
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble(){
    var clutter = "";

for(var i=0;i<=101;i++){
    var num = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${num}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    var timerfun = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeint").textContent = timer;    
        }
        else{
            clearInterval(timer)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
      }, 1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = (Number(dets.target.textContent));
    if(rn === clickednum)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runtimer();
makeBubble();
getNewHit();