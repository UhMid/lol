document.addEventListener("mousemove", move);
function move(e){
    document.querySelectorAll(".layer").forEach(function(Move){
        const x=((e.clientX+1000)*-5)/20;
        document.getElementById("top").style.transform=`translateX(${x}px)`;
        document.getElementById("bottom").style.transform=`translateX(${-x-1250}px)`;
    })
}
/*--------------------------------------------------------------------------------------*/
document.getElementById("btn").addEventListener("click", clicked)
function clicked(){
    window.location.href = "javascript:history.back()"
}