//---------------------------Element selectors------------------------------
let clean=document.getElementById("clean");
let warrior=document.getElementById("warrior");
//--------------------------------------------------------------------------

//-------------------------------Variables----------------------------------
let bo1=30;
let move=650;
//--------------------------------------------------------------------------

//----------------------------Default Functions-----------------------------
function randomgenerator(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function check(){
    let tanks=document.querySelectorAll(".tank");
    let bullets=document.querySelectorAll(".bullet");
    for(t of tanks){
        for(s of bullets){
            if((t.offsetLeft<=s.offsetLeft && t.offsetLeft+40>=s.offsetLeft) && (t.offsetTop<=s.offsetTop&&t.offsetTop+10>=s.offsetTop) ){
                t.remove();
                s.remove();
            }
        }
    }
} 
//--------------------------------------------------------------------------

//-----------------------Enemy Tank Creator Function------------------------
setInterval(()=>{
    let tank=document.createElement("div");
    let randomLeft = randomgenerator(0,window.innerWidth-50);
    tank.className="tank";
    tank.style.left=randomLeft+"px";
    clean.appendChild(tank);
    let tTop=0;
    setInterval(()=>{
        tTop+=10;
        tank.style.position="fixed";
        tank.style.top=tTop+"px";
        if(tTop>700){
            tank.remove();
        }
        check();
    },1000)
},3000)
//--------------------------------------------------------------------------

//-------------------------------Shoot Function-----------------------------
document.onkeyup=function(e){
    if(e.which==32){
        let bullet=document.createElement("div");
        bullet.className="bullet";
        bullet.style.left=move+18+"px";
        warrior.appendChild(bullet);
        let bot=30;
        setInterval(()=>{
            bot+=10;
            bullet.style.position="fixed";
            bullet.style.bottom=bot+"px";
            bo1 = bot;
            if(bot>750){
                bullet.remove();
            }
            check();
        },5)
    }
}
//--------------------------------------------------------------------------

//----------------------------Movement Function-----------------------------
document.addEventListener("keydown",function(e){
    if(e.which==39 && move<=window.innerWidth-50){
        move=move+10;
        warrior.style.left=move+"px";
    }
    else if(e.which==37 && move>=2){
        move=move-10;
        warrior.style.left=move+"px";
    }
    check();
})
//--------------------------------------------------------------------------